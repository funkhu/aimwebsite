<template>
    <div class="navbar">
        <nav class="blue darken-3">
            <div class="nav-wrapper">
                <div class="container">
                    <router-link to="/" class="brand-logo"><img id="aim-logo" src="..\assets\logo\Logo2.png" alt="">
                    <div class="logo-text">
                        <h6>Airconditioning</h6>
                        <h6>Industrial</h6>
                        <h6>Maintenance</h6>
                    </div>
                    </router-link>
                    <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><router-link active-class="active" to="/" exact>Home</router-link></li>
                        <li><router-link active-class="active" to="about">About Us</router-link></li>
                        <li><router-link active-class="active" to="team">Team</router-link></li>
                        <li><router-link active-class="active" to="contact">Contact Us</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <ul class="sidenav" id="mobile-nav">
            <li><router-link active-class="active" to="/" exact>Home</router-link></li>
            <li><router-link active-class="active" to="about">About Us</router-link></li>
            <li><router-link active-class="active" to="team">Team</router-link></li>
            <li><router-link active-class="active" to="contact">Contact Us</router-link></li>
        </ul>
    </div>
</template>

<script>
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});
</script>

<style>
nav {
  line-height: 61px;
  background: rgba(117, 117, 117, 0.7);
}

nav ul a {
  font-weight: bold;
}
nav .active {
  border-bottom: 2px solid #dedede;
}
#aim-logo {
  height: -webkit-fill-available;
}
.logo-text {
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 98px;
}
h6 {
  line-height: 100%;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #eceff1;
}
</style>
