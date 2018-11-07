<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
                <div class="container">
                    <router-link to="/" class="brand-logo"><img id="aim-logo" src="..\assets\logo\picture1.png" alt=""></router-link>
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

// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".slider");
//   var instances = M.Slider.init(elems, {
//     indicators: false,
//     height: 200,
//     transition: 500,
//     interval: 6000
//   });
// });
</script>

<style>
nav {
  /* position: fixed; */
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
</style>
