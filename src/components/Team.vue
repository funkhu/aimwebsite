<template>
    <div id="team" class="z-depth-1">
        <div class="col s12 center-align">
        <img class="responsive-img" src="">
        
      </div>
      <div class="left-align team-heading">Team</div>
      <div style="flex: 1; padding-left: 97px;">
        <div class="row">
          <div class="col s12 team-container">
            <ul class="flex-container wrap">
              <li class="portrait">
                <img class="portrait-pic z-depth-1" src="../assets/portraits/keith.jpg">
                <div class="portrait-text">
                  <div class="name grey-text text-darken-2">Keith Sander</div>
                </div>
              </li>
              <li class="portrait">
                <img class="portrait-pic z-depth-1" src="../assets/portraits/1.jpg">
                <div class="portrait-text">
                  <div class="name grey-text text-darken-2">Qinisela Mkhize</div>
                </div>
              </li>
              <li class="portrait">
                <img class="portrait-pic z-depth-1" src="../assets/portraits/3.jpg">
                <div class="portrait-text">
                  <div class="name grey-text text-darken-2">Siyazama Ndlovu</div>
                </div>
              </li>
              <li class="portrait">
                <img class="portrait-pic z-depth-1" src="../assets/portraits/7.jpg">
                <div class="portrait-text">
                  <div class="name grey-text text-darken-2">Bhekani Nguse</div>
                </div>
              </li>
              <li class="portrait">
                <img class="portrait-pic z-depth-1" src="../assets/portraits/8.jpg">
                <div class="portrait-text">
                  <div class="name grey-text text-darken-2">Khulekani Khanyile</div>
                </div>
              </li>
              <li class="portrait">
                <img class="portrait-pic z-depth-1" src="../assets/portraits/brandon.jpeg">
                <div class="portrait-text">
                  <div class="name grey-text text-darken-2">Brandon Walker</div>
                </div>
              </li>
            </ul>
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
  name: "team",
  data() {
    return {};
  }
};
</script>

<style>
#team {
  background-color: white;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
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

.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}

.portrait {
  flex-direction: row;
}

.portrait-pic {
  height: 145px;
  border: #dedede solid 1px;
  padding: 5px;
  margin: 10px;
}

.name {
  text-transform: uppercase;
  font-size: 18px;
}

.position {
  text-transform: uppercase;
  font-size: 14px;
}

.portrait-text {
  height: 150px;
  width: 150px;
  float: right;
  text-align: center;
  padding-top: 11px;
  font-weight: 500;
  flex-direction: column;
  margin-right: 100px;
}

.wrap {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>

