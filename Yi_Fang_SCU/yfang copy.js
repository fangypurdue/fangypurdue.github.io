var show_time = 4500;
var fade_out_time = 2500;
var fade_in_time = 1000;
function load_random_quote()
{
   $("#random_quote").load("random_quote.php");
   fade_in_quote();
}

function fade_out_quote()
{
   $("#random_quote").fadeOut(fade_out_time, load_random_quote);
}

function fade_in_quote()
{
   $("#random_quote").fadeIn(fade_in_time);
   setTimeout("fade_out_quote()",show_time);
}

function load_shaney()
{
   //$("#shaney_results").load("process_shaney.php?input=" + escape(document.getElementById("input").value));
   $("#shaney_results").load("process_shaney.php" , {'input' : document.getElementById("input").value});
}

function load_vocab_word(val)
{
   var str = "?submit_type=" + val;
   str += "&start=" + document.getElementById("start").value;
   str += "&end=" + document.getElementById("end").value;
   str += "&wid=" + document.getElementById("wid").value;
   $("#results").load("get_word.php" + str, 
         function()
         {
            document.getElementById("definition").style.display='none';
            document.getElementById("hide_def").value = "1";
            var arr = document.getElementById("results").innerHTML.split("***");
            $("#vocab_word").html(arr[0]);
            $("#definition").html(arr[1]);
            document.getElementById("wid").value = arr[2];
         });
}

function toggle_vocab_definition()
{
   if(document.getElementById("hide_def").value == "1")
   {
      document.getElementById("hide_def").value = "0";
      document.getElementById("definition").style.display="inline";
   }
   else
   {
      document.getElementById("hide_def").value = "1";
      document.getElementById("definition").style.display="none";
   }
}

function jump_to(obj)
{
   $('html, body').animate({
      scrollTop: $(obj).offset().top - 90
   }, 100);
}

