<template>
    <div>
        <nav>
            <div class="nav-wrapper blue-grey lighten-2 transparent">
                <div class="container">
                    <router-link to="/" class="brand-logo"><img src="..\assets\Logo.png" alt=""></router-link>
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
}

nav ul a {
  font-weight: bold;
}
.active {
  border-bottom: 2px solid #dedede;
}
</style>
