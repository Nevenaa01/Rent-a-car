Vue.component("IzmenaKorisnika", {
	data: function () {
		    return {
		      korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
		   		validnoKorisnickoIme: true,
		      validnaLozinka: true,
		      validnoIme: true,
		      validnoPrezime: true,
		      validanPol: true,
		      validanDatumRodjenja: true,
		      korIme:"",
		      ulogovan:null,
		     admin:null,
		     menadzer:null,
		     kupac:null
		    }
	},
	template: ` 
	<div class="pozadina1">
            <div>
                  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" v-bind:href="'/WebShopREST/#/'">Rent A Car - F1 edition</a>
                        </div>
                        <ul class="vr text-light m-0 p-0">

                       </ul>
                        <ul class="navbar-nav w-75">
                            <li><a v-bind:href="'/WebShopREST/#/'" class="nav-link">Objekti</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/iznajmljivanjeVozila'" v-if="kupac" class="nav-link active">Iznamji</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/profil/'+this.korisnik.korisnickoIme" class="nav-link" v-if="ulogovan">Profil</a></li>
                        </ul>
                        
                        <ul class="navbar-nav navbar-right w-25 justify-content-end">
                            <li><a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Uloguj se</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/registracija'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Registuj se</a></li>
                        </ul>
                    </div>
                </nav>
                </div>
                 <div v-if="!this.ulogovan">
                 <br><br>
	        		<label>Nisi ulogovan!</label><br>
	        		<a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link">Uloguj se</a></li>
	       		</div>
                <div class="col-sm-12 d-flex justify-content-center align-items-center marginagornja" v-if="ulogovan">
                   <div class="row">
  <div class="container">
          <div class="row mt-5">
            <div class="col-sm-2">
                <div class="col-sm-3" v-if="this.ulogovan">
                    <div class="">
                        
                    </div>
              </div>
            </div>
            <div class="col-sm-10">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><b>Korisničko ime</b></label>
                    <input type="text" v-model="korisnik.korisnickoIme" class="form-control" :class="{ 'red': !validnoKorisnickoIme }" placeholder="Unesite korisničko ime">
                    <label v-if="!validnoKorisnickoIme" class="invalidInputs">*Nevalidno korisničko ime</label>
                    </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><b>Lozinka</b></label>
                    <input type="password" v-model="korisnik.lozinka" class="form-control" :class="{ 'red': !validnaLozinka }" placeholder="Unesite lozinku">
                    <label v-if="!validnaLozinka" class="invalidInputs">*Nevalidna lozinka</label>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><b>Ime</b></label>
                    <input type="text" v-model="korisnik.ime" class="form-control" :class="{ 'red': !validnoIme }" placeholder="Unesite ime">
                    <label v-if="!validnoIme" class="invalidInputs">*Nevalidno ime</label>
                    </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><b>Prezime</b></label>
                    <input type="text" v-model="korisnik.prezime" class="form-control" :class="{ 'red': !validnoPrezime }" placeholder="Prezime">
                    <label v-if="!validnoPrezime" class="invalidInputs">*Nevalidno prezime</label>
                    </div>
                </div>   
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><b>Pol</b></label>
                    <select v-model="korisnik.pol" class="form-control" :class="{ 'red': !validanPol }" placeholder="Pol">
                    <option value="Muski">Muski</option>
                    <option value="Zenski">Zenski</option>
                    </select>
                    <label v-if="!validanPol" class="invalidInputs">*Izaberite pol</label>
                    </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><b>Datum rođenja</b></label>
                    <input type="date" v-model="korisnik.datumRodjenja" class="form-control" :class="{ 'red': !validanDatumRodjenja }">
                    <label v-if="!validanDatumRodjenja" class="invalidInputs">*Nevalidan datum</label>
                    </div>
                </div>   
              </div>
              <div class="row mt-3">
                <div class="col-sm-12">
                  <div class="col-sm-12 d-flex justify-content-center align-items-cente marginagornja" v-if="ulogovan">
                    <button type="submit" class="btn btn-dark w-100" value="Izmeni profil" v-on:click="izmeniKorisnika(korisnik.korisnickoIme)">Izmeni profil</button>
                </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
        </div>
        <br><br><br><br>
        </div><br><br><br><br>
                    
                		<footer class="text-center text-lg-start text-white d-flex flex-column">
					    <section class="d-flex justify-content-between p-4 footerSocijalneMreze">
					      <div class="me-5">
					        <span>Posetite nas i na društvenim mrežma:</span>
					      </div>
					      
					      <div>
					        <a href="https://www.facebook.com/" class="text-white me-4">
					          <i class="fa fa-facebook"></i>
					        </a>
					        <a href="https://www.twitter.com/" class="text-white me-4">
					          <i class="fa fa-twitter"></i>
					        </a>
					        <a href="https://www.google.com/" class="text-white me-4">
					          <i class="fa fa-google"></i>
					        </a>
					        <a href="https://www.instagram.com/" class="text-white me-4">
					          <i class="fa fa-instagram"></i>
					        </a>
					        <a href="https://www.linkedin.com/" class="text-white me-4">
					          <i class="fa fa-linkedin"></i>
					        </a>
					        <a href="https://www.pinterest.com/" class="text-white me-4">
					          <i class="fa fa-pinterest"></i>
					        </a>
					      </div>
					    </section>
					
					    <section>
					      <div class="text-center text-md-start mt-5">
					        <div class="row mt-3">
					          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ps-0">
					            <h6 class="text-uppercase fw-bold">Rent A Car - F1 edition</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p>
					              Rent A Car - F1 edition je sajt sa željom da pomogne i ponudi 
					              vozila koja će učiniti da se osećate kao da ste
					              pravi vozač F1.
					            </p>
					          </div>

					          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
					            <h6 class="text-uppercase fw-bold">Vozila</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p class="text-white">
					            	Automobil
					            </p>
					            <p class="text-white">
					            	Kombi
					            </p>
					            <p class="text-white">
					            	Mobilehome
					            </p>
					          </div>

					          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 ps-2">
					            <h6 class="text-uppercase fw-bold">Korisni linkovi</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p>
					              <a v-bind:href="'/WebShopREST/#/'" class="text-white">Rent a car objekti</a>
					            </p>
					            <p>
					              <a v-bind:href="'/WebShopREST/#/profil/'" class="text-white">Profil</a>
					            </p>
					            <p>
					              <a href="#!" class="text-white">Dodati kad bude vise stranica</a>
					            </p>
					            <p>
					              <a href="#!" class="text-white">Dodati kad bude vise stranica</a>
					            </p>
					          </div>

					          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
					            <!-- Links -->
					            <h6 class="text-uppercase fw-bold">Kontakt</h6>
					            <hr class="mb-4 mt-0 d-inline-block mx-auto footerHr"/>
					            <p><i class="fa fa-home mr-3"></i> Novi Sad, Srbija</p>
					            <p><i class="fa fa-envelope mr-3"></i> najjaciTim@gmail.com</p>
					            <p><i class="fa fa-phone mr-3"></i> +381 61 234 5678</p>
					            <p><i class="fa fa-print mr-3"></i> +381 61 234 5678</p>
					          </div>
					        </div>
					      </div>
					    </section>
					  </footer>
	</div>
	`,
	mounted(){
		this.korIme=this.$route.params.korIme;
		axios.get("rest/korisnik/ucitaj/"+this.korIme)
		.then(response => {
			this.korisnik = response.data
			return axios.post('rest/korisnik/ulogovan');
			})
			.then(response => {
				korisnikSesija=response.data;
				
				if(korisnikSesija)
					this.ulogovan=true;
				else
					this.ulogovan=false;
				if(this.korisnik.uloga==="Administrator")
							this.admin=true;
						else
							this.admin=false;
		if(this.korisnik.uloga==="Menadzer")
							this.menadzer=true;
						else
							this.menadzer=false;
		if(this.korisnik.uloga === "Kupac")
			this.kupac = true;
		else
			this.kupac = false;
			})
		this.korisnik.datumRodjenja = new Date(this.korisnik.datumRodjenja);
	}
	, 
	methods : {
		izmeniKorisnika : function(korIme){
			event.preventDefault()
			
			this.validnoKorisnickoIme = !(this.korisnik.korisnickoIme === null || this.korisnik.korisnickoIme === "")
			this.validnaLozinka = !(this.korisnik.lozinka === null || this.korisnik.lozinka === "")
			this.validnoIme = !(this.korisnik.ime === null || this.korisnik.ime === "")
			this.validnoPrezime = !(this.korisnik.prezime === null || this.korisnik.prezime === "")
			this.validanPol = !(this.korisnik.pol === null || this.korisnik.pol === "")
			this.validanDatumRodjenja = !(this.korisnik.datumRodjenja === null || this.korisnik.datumRodjenja === "")
			
			datum = new Date(this.korisnik.datumRodjenja);
			if(datum >= new Date()){
				this.validanDatumRodjenja = false;
			}
			
			if(this.validnoKorisnickoIme && this.validnaLozinka && this.validnoIme 
				&& this.validnoPrezime && this.validanPol && this.validanDatumRodjenja){
				axios
					.put('rest/korisnik/izmeniKorisnika', this.korisnik)
					.then(response => {
						
						const validan = response.data;
						if(validan){
							alert("Uspesno ste izmenili korisnika")
							router.push(`/profil/${korIme}`)
						}
						else
						alert("Greska pri izmeni!");
					})
			}
		}
	}
	
});