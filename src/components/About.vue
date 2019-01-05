<template>
  <div id="about" class="z-depth-1">
    <div class="col s12 center-align">
      <section id="about-banner"></section>
      <div class="left-align about-heading">About Us</div>
    </div>

    <div style="flex: 1;">
      <div class="row">
        <div class="col s8 offset-s1">
          <div class="aim-about-header grey-text text-darken-3">
            <p>
              <span class="aim">A.I.M</span> Air Conditioning is a family owned business that was originally established in 1989.
            </p>
            <p>
              <span class="aim">A.I.M</span> specialises in Industrial and Commercial installations.
            </p>
            <p>
              <span class="aim">A.I.M</span> carries out repairs and maintenance to a variety of equipment in the greater Durban and surrounding areas and are experienced to maintain and repair all brands of air-conditioning units, chillers and related equipment.
            </p>
            <p>
              <span class="aim">A.I.M</span> offers maintenance contracts as well as service contracts to a wide variety of clients.
            </p>
            <p>
              <span class="aim">A.I.M</span> specialises in Industrial and Commercial installations.
            </p>
            <p>
              <span class="aim">A.I.M</span> client base includes a variety of company’s including the Office of the Premier, Island View Storage, M S C, Hillside Mall, Redefine Properties and many other companies.
            </p>
            <p>
              <span class="aim">A.I.M</span> are registered on the ZNT Government data base.
            </p>
            <p>
              <span class="aim">A.I.M</span> service and repair equipment at many Clinics, Hospitals and Government Institutions
            </p>
            <p>
              <span class="aim">A.I.M</span> also have a team that specialise in domestic air conditioning and offer installations of new air conditioning units and servicing and repairs to your existing units at home.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>A.I.M Airconditioning Industrial Maintenance | Created by Ben Sander</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>

<style>
#about {
  background-color: white;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}

#about-banner {
  background-image: url("../assets/scroll/about.jpg");
  background-position: center center;
  background-size: cover;
  height: 28em;
  text-align: center;
  position: relative;
}

.about-heading {
  background: rgba(0, 0, 0, 0.5);
  margin-left: 0px !important;
  margin-right: 0px !important;
  color: #eceff1;
  font-size: 43px;
  padding: 15px;
  margin-top: -94px;
  position: relative;
}

.footer {
  background-color: #424242;
  min-height: 30px;
  padding-left: 10px;
  color: #dedede;
}

.aim-about-header {
  font-size: 14px;
}

.aim {
  color: #1565c0;
  font-weight: 500;
}

p {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>