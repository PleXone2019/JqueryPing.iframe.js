# JqueryPing.iframe.js

##set
your origin website must contain code:
<pre><code>
if (self != top){
    top.location.href = self.location.href;
}
</code>
</pre>
##download
<pre><code>
cd ./your website js dir
git clone https://github.com/jarbob/JqueryPing.iframe.js.git
</code></pre>
##how to use
1.you must put jquery.js under v1.2 in your html  
2.and use below code to function successfully!
<pre><code>
$(document).ready(function () {
        var p = new Ping();

        p.urlArr = [
            "www.name1.com/?aff=514561",
            "www.name2.com",
            "www.name3.com"

        ];
        p.ping();
    });

</code><pre>
