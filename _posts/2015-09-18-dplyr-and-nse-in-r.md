---
layout: post
title: How to apply any summary function to data with Dplyr, ..., and non-standard evaluation in R
---

A few days ago I asked [this question](https://stackoverflow.com/questions/32625620/using-dplyr-and-lazyeval-with) on stack overflow. The answer was awesome, but left me with some confusion as to what exactly was happening.  And thus the idea for this post was born.

Summarizing data across a dimension happens **a lot**. And while it mostly happens with simple functions like mean, median, standard deviations, min, max, etc..., occassionally you want to summarize using a more complex operation. Enter [Dplyr](https://github.com/hadley/dplyr) in all it's glory.

Simple summarizing of data with `dplyr` looks like this:

{% highlight r %}

    library(dplyr)

    #generate some data
    df = data.frame(
        temp = 15 + 3*rnorm(124),
        day = 1:31,
        hour = c(rep(rep(0,3),31))) * 6  #every six hours
    
    #Group the data by day, summarize over each day
    group_by(df, day) %>% 
    summarize(day_temp_avg = mean(temp),
                         day_temp_sd    = sd(temp) 
    ) %>% ungroup()

{% endhighlight %}

Here `group_by()` groups your data by week and `summarize()` applies `mean()` and `sd()` to each group. `%>%` is a pipe operator that applies the output of a previous function to the next function. You can have lots of fun reading about it and dplyr in this nice [post](https://seananderson.ca/2014/09/13/dplyr-intro.html).

So, that's great and all. But you can extend this to apply to any function, not just `mean()` and `sd()`:
{% highlight r %}

    #grouped data.frame
    by_day = group_by(df, day)
    
    # mean temperature weighted by day
    summarize(by_day, wmean = weighted.mean(temp, day))

    # mean temperature multiplied by hour
    summarize(by_day, temp_by_day = mean(temp * hour) )

    #Custom function
    scale_and_shift_mean <- function(x, m, b) { b + m * mean(x) }
    summarize(by_day, sstemp = scale_and_shift_mean(temp, 5, 10))

{% endhighlight %}
But what if you want to vary `m` and `b` in the example above based on some other data? In effect, what if you want to wrap summarize in another function to allow for different  argument values? This is not a theoretical question. I needed to do this for a shiny app I'm working on. In it we want to display "Growing Degree Days", which are a measure of how much of the heat in a day is available to crops. It's calculated like this:
{% highlight r %}
    
    calcGDD <- function(temps, temp_max = 30, temp_min = 0, temp_base = 5, gdd_max = 25) {
        #For the calculation, individual temperatures cannot be 
        # higher than max or lower than min 
        temps[temps>temp_max] = temp_max
        temps[temps<temp_min] = temp_min
        # same thing with pmax, pmin
        # temps = pmax(pmin(temp, temp_max), temp_min)
      
        #Calculate the average
        temp_avg = mean(temps)
      
        #Calculate GDD
        gdd = temp_avg - temp_base

        #GDD cannot be higher than gdd_max, and can't be below 0
        pmax(pmin(gdd, gdd_max),0)
    }
{% endhighlight %}

GDD can be calculated using the defaults in the function above, but it can also be tuned to a specific crop, for which different values may apply. Apples, for example, would be:
{% highlight r %}

    calcGDD(temps, temp_max = 25, temp_min = 5, temp_base = 5, gdd_max = 25)
{% endhighlight %}

We want to wrap `calcGDD()` in a summarize statement, but make it flexible enough to specify the variables to group and summarize by. For a primary function like `mean` that's relatively easy, and looks like this:
{% highlight r %}

    #dynamic function based on group and summarize vars
    library(lazyeval)
    dynamicSummarize <- function(df, temp_var, group_var) {
        group_by_(df, group_var) %>%
        summarize_(var_mean = interp(~mean(x), x=as.name(temp_var)))
    }

    dynamicSummarize(df, "temp", "day")
{% endhighlight %}

Notice that "group_by" is now "group_by_" and "summarize" is now "summarize_". The added "_" to many (all?) dplyr functions allows for what is called **non-standard evaluation** (NSE). Basically, evaluation is held until the value for a variable can be substituted, rather than evaluated directly. So here "group_var" is first evaluated to its value "day", which is then passed to the group_by function. Wickham has a great vignette you can access in R by `vignette("nse"), or you can read about it in [Advanced R](https://adv-r.had.co.nz/Computing-on-the-language.html).

With the dynamic function, if you had multiple data sets for which you wanted to calculate the mean over a group, instead of grouping and summarizing each one, you could just make a series of calls to `dynamicSummarize()`. A custom function works the same way:
{% highlight r %}

    dynamicCalcGDD <- function(df, temp_var, group_var) {
        group_by_(df, group_var) %>%
        summarize_(var_mean = interp(~calcGDD(x), x=as.name(temp_var)))
    }
{% endhighlight %}

###The Hard Part
Suppose we sometimes want to replace some of the default values to `calcGDD()`. Suppose our crop data, for some crops includes values for all the defaults, but for others may only have one or two. We need to pass a flexible list of additional variables to our `dynamicCalcGDD()` function.

Unfortunately, (as so often happens) the first thing I did didn't work:
{% highlight r %}

    #doesn't work
    dynamicCalcGDD <- function(df, temp_var, group_var, ...) {
        group_by_(df, group_var) %>%
        summarize_(var_mean = interp(~calcGDD(x, ...), x=as.name(temp_var)))
    }
{% endhighlight %}

Of course..., because `...` is not evaluated correctly. And none of these lines work to replace it:
{% highlight r %}

    #doesn't work!
    summarize_(var_mean = interp(~calcGDD(x, y), .values = list(x=as.name(temp_var), y = ...))) #doesn't work
    
    #doesn't work!!
    summarize_(var_mean = interp(~calcGDD(x, y), .values = list(x=as.name(temp_var), y = as.name(...)))) #doesn't work!
    
    #ARGBLRGHH!!
    vlist = list(...)
    fn_str = "calcGDD(x"
    for v in names(vlist) { #OMG a for loop
        fn_str = paste0(fn_str, ", " v, " = ", vlist[v])
    }
    fn_str = paste0(fn_str, ")")
    summarize_(var_mean = interp(fn_str, x=as.name(temp_var)))
{% endhighlight %}

Welcome to the wonderful world of... something. Anyway, as you can imagine I spent quite a while trying to figure out how to get this working, which eventually led to my swearing off programming, deciding to be a hobo, and finally posting the question I linked to at the beginning of this post to stack exchange.

The solution was less convoluted than I had imagined, and ends up using `call` and `do.call`:
{% highlight r %}

    dynamicCalcGDD <- function(df, temp_var, group_var, ...) {
  
        #create the function call
        temp_var = as.name(substitute(temp_var))
        mycall = do.call(call, c('calcGDD', quote(temp_var), list(...)))
 
        #group, summarize, ungroup
        if (!missing(group_var)) df = group_by_(df, group_var)
        summarize_(df, gdd = lazy_(mycall, environment())) %>% ungroup()
    }
{% endhighlight %}

But *why* does it work? Well, `call` returns an unevaluated function call, in which a function itself is not evaluated, but all of the variables passed to it are. For example:
{% highlight r %}

    v = c(1,2,3)
    call("mean", v)
    #>mean(c(1, 2, 3))
{% endhighlight %}

A simple test function reveals more:
{% highlight r %}

    test_call <- function(a, b, ...) {
        print(call("calcGDD", quote(a), list(...)))
    }
    test_call("x", 5, c=1, d=2)
    #>calcGDD(a, list(c=1, d=2))
{% endhighlight %}

So by evaluating `temp_var` as a name and quoting it, the call in `dyanimicCalcGDD` returns: `calcGDD(temp, <list of optional variables>)`. These then get evaluated by `lazy_` in the summarize call. To annotate each line:
{% highlight r %}
    
    dynamicCalcGDD <- function(df, temp_var, group_var, ...) {
  
        #create the function call
        temp_var = as.name(substitute(temp_var))                               #> temp_var becomes -> "temp" becomes -> temp
        mycall = do.call(call, c('calcGDD', quote(temp_var), list(...)))  #> do.call(calcGDD(temp, <optional vars>))
 
        #group, summarize, ungroup
        if (!missing(group_var)) df = group_by_(df, group_var)
        summarize_(df, gdd = lazy_(mycall, environment())) %>% ungroup() #call is evaluated
    }
{% endhighlight %}

If you're here looking for help, I hope you found it. I know it definitely helped me to write this.
