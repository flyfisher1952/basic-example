import React from 'react';
import "./App.css";

const getHtml = () => {
    return (`
        <div class="panel panel-default" style="margin-right:-12px; margin-left:-12px">
          <div class="panel-body-two-panel-default">
            <h4 class="text-center">Thursday<br>02/16/23<br><i class="fa-solid fa-star-sharp"></i></h4>
            <p class="text-center"><strong>Major Times</strong><br>7:40 AM-9:40 AM<br>8:13 PM-10:13 PM</p>
            <p class="text-center"><strong>Minor Times</strong><br>3:21 AM-4:21 AM<br>12:59 PM-1:59 PM</p>
            <p class="text-center"><strong>Day Rating</strong><br><i class="fa-solid fa-star-sharp"></i><br>Average</p>
            <p class="text-center"><strong>Sun Data</strong><br>Rise: 6:37 AM<br>Set: 5:38 PM</p>
            <p class="text-center"><strong>Day Length</strong><br>11 hrs. 01 mins.</p>
            <p class="text-center"><strong>Moon Data</strong><br>Rise: 3:51 AM<br>Set: 1:29 PM<br>Over: 8:40 AM<br>Under: 9:13 PM</p>
            <p class="text-center"><strong>Moon Phase</strong><br><img src="https://solunarforecast.com/images/moonimages/waning17percent.png" width="60" height="60" alt="Moon Phase is 17% percent waning crescent" title="Moon Phase is 17% percent waning crescent"><br>17%<br>waning<br>crescent</p>
            <a class="btn btn-link center-block" rel="popover" data-placement="auto" data-style="primary" data-popover-content="#btn-16" data-toggle="popover" data-trigger="focus" tabindex="0"><span class="text-muted">Explanation</span></a>
            <div class="hidden" id="btn-16">
              <div class="popover-heading">
                <h5 class="text-center"><strong>Hunting &amp; Fishing Day Explanation</strong><br><br>Thursday 02/16/23<br><i class="fa-solid fa-star-sharp"></i><br>Beverly Hills<br>California (US)</h5>
              </div>
              <div class="popover-body">
                <p class="text-center"><strong>Hunting And Fishing Day Rating</strong></p>Best hunting and fishing times prediction near the area of Beverly Hills California for the date of Thursday, 02/16/2023 are based on the moon being 17% illuminated and is rated as a 1 star or Average day.  As the moon transitions to a Full or New moon the predicated value will rise.<br><br><p class="text-center"><strong>Hunting And Fishing Peak Times</strong></p>Since the minor or major periods do not coincide with a sunrise or sunset this day does not have a heightened peak time rating which would be indicated with a + or a ++ and the text bolding of the included periods.
              </div>
            </div>
          </div>
        </div>`
    );
};

function App() {
    return (
        <div className="App">
            <div dangerouslySetInnerHTML={{ __html: getHtml() }}></div>
        </div>
    );
}

export default App;
