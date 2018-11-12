<template>
    <div id="home" class="z-depth-1">
      <div class="col s12 center-align">
        <img class="responsive-img" src="../assets/scroll/HVACOriginal.jpg">

        <div id="btn-row">
          <router-link id="learn-more-btn" class="waves-effect light-blue accent-2 btn-large" to="about">LEARN MORE</router-link>
          <a id="request-quote" class="waves-effect blue lighten-5 waves-light btn-large">REQUEST A QUOTE</a>
        </div>
      </div>
      <div class="row">
        <div class="col s12 center-align">
          <div class="aim-header blue-text text-darken-3">Airconditioning Industrial Maintenance</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style>
#home {
  background-color: white;
  min-height: 100%;
}

#btn-row {
  margin-top: -115px;
  margin-bottom: 58px;
}

.aim-header {
  font-weight: 600;
  font-size: 49px;
}

#learn-more-btn {
  border-radius: 29px;
}

#request-quote {
  border-radius: 29px;
  color: black;
}
</style>

