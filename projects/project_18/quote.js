window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let endpoint ="https://wp.zybooks.com/quotes.php";
   let url = endpoint + "?topic=" + topic + "&count=" + count;

   let xhr = new XMLHttpRequest();
   //set up action when data is returned
   xhr.addEventListener("load", responseReceivedHandler);
   //required for JSON
   xhr.responseType = "json";
   //open connection
   xhr.open("GET",url);
   //send data
   xhr.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   //this function is called when data is received
   if (this.status == 200) {
      if (this.response.error) {
         //put error message
         document.querySelector("#quotes").innerHTML = this.response.error;
      } 
      else {
         let html = "<ol>";
         for (let c = 0; c < this.response.length; c++) {
            const quote = this.response[c].quote;
            const source = this.response[c].source;
            html += `<li>${quote} - ${source}</li>`;
         }
         html += "</ol>";

         document.querySelector("#quotes").innerHTML = html;
      }
   } 
}




















































// write out:
// loop through the array
//    for each item in array:
//       get quote and source from item
//       create li string
//       add to ol string
// add to html