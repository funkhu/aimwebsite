<template>
    <div id="contact" class="z-depth-1">
      <div class="col s12 center-align">
        
      </div>
      <div class="left-align about-heading">Contact Us</div>
      <div style="flex: 1;">
        <div class="row">
          <div id="map"></div>
        </div>
      
      </div>
           <div class="footer">
        <p>A.I.M Airconditioning Industrial Maintenance | Created by Ben Sander</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {};
  },
  mounted: function() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 61.180059, lng: -149.822075 },
      scrollwheel: false,
      zoom: 4
    });
  }
};
</script>

<style>
#contact {
  background-color: white;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}

#map {
  height: 300px;
  width: 300px;
}

.team-heading {
  background: rgba(0, 0, 0, 0.5);
  margin-left: 0px !important;
  margin-right: 0px !important;
  color: #eceff1;
  font-size: 43px;
  padding: 15px;
  margin-top: -22px;
}

.footer {
  background-color: #424242;
  min-height: 30px;
  padding-left: 10px;
  color: #dedede;
}
</style>
