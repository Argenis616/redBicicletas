var map = L.map('mapid').setView([19.3302257,-99.1893929], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', 
            {foo: 'bar', 
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
            
            var marker = L.marker([19.329892, -99.183717]).addTo(map);
            marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();