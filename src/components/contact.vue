<template>
    <div id="contact" class="z-depth-1">
      <div class="left-align contact-heading">Contact Us</div>
      <div class="" style="flex: 1; display: flex;">
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.973923459872!2d30.978160315111516!3d-29.89385198193738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7abd30ce22667%3A0x85032729b8a70f82!2sAirconditioning+Industrial+Maintenance!5e0!3m2!1sen!2sza!4v1542457211381" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="details">
          <ul>
            <li>Need to get in touch with us? Find our contact details below:</li>
            <li><i class="tiny material-icons">home</i><b>Address: </b></li>
            <li><i class="tiny material-icons">local_phone</i><b>Phone Number: </b></li>
            <li><i class="tiny material-icons">email</i><b>Email Address: </b></li>
          </ul>
            <div class="quote-btn">
              <a class="waves-effect light-blue accent-2 btn-large modal-trigger" href="#modal">REQUEST A QUOTE</a>
            </div>
            <div id="modal" class="modal">
              <div class="modal-content">
                <h4>Request a Quote</h4>
                <div class="column">
                  <div class="input-field">
                    <input id="first_name" type="text" class="validate">
                    <label for="first_name">First Name</label>
                  </div>
                  <div class="input-field">
                    <input id="last_name" type="text" class="validate">
                    <label for="last_name">Last Name</label>
                  </div>
                  <div class="input-field">
                    <input id="email" type="email" class="validate">
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Query</label>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Send</a>
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
  name: "contact",
  data() {
    return {};
  },
  mounted: function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
      inDuration: 300
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

i.tiny {
  margin: 10px;
}

.map {
  margin-top: 20px;
  margin-left: 115px;
}

.details {
  margin-left: 45px;
  padding-top: 122px;
}

.contact-heading {
  background: rgba(0, 0, 0, 0.5);
  margin-left: 0px !important;
  margin-right: 0px !important;
  color: #eceff1;
  font-size: 43px;
  padding: 15px;
}

.footer {
  background-color: #424242;
  min-height: 30px;
  padding-left: 10px;
  color: #dedede;
}
</style>
