Vue.component("PrikazKorisnika", {
	data: function () {
		    return {
		     korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
		     korIme:"",
		     ulogovan:null,
		     admin:null,
		     menadzer:null,
		     kupac:null,
		     objekatId:null
		    }
	},
	template: ` 
	<div class="pozadina1">
	<link rel="stylesheet" href="profile.css">
		<div v-if="this.ulogovan">
	      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" v-bind:href="'/WebShopREST/#/'">Rent A Car - F1 edition</a>
                        </div>
                        <ul class="vr text-light m-0 p-0">

                       </ul>
                        <ul class="navbar-nav  w-75">
                            <li><a v-bind:href="'/WebShopREST/#/'" class="nav-link">Objekti</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/iznajmljivanjeVozila'" v-if="kupac" class="nav-link">Iznamji</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/profil/'+this.korisnik.korisnickoIme" class="nav-link active" v-if="ulogovan">Profil</a></li>
                        </ul>
                        
                        <ul class="navbar-nav navbar-right w-25 justify-content-end">
                            <li><a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Uloguj se</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/registracija'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Registuj se</a></li>
                        </ul>
                    </div>
                </nav>
	    </div>
	        <div class="container">
        <div class="row mt-5">
          <div class="col-sm-6">
            <div class="row">
            <div class="col-sm-3" v-if="this.ulogovan">
                <div class="">
                    <img class="img img-responsive" src="Img/profile.png" alt="Image" style="max-width: 128px; max-height: 128px;">
                </div>
            </div>
            <div class="col-sm-9 mt-2" v-if="this.ulogovan">
                <div>
                    <label class="velikiFont"><b>Korisnicko ime:</b> {{korisnik.korisnickoIme}}</label><br>
                    <label class="velikiFont"><b>Uloga: </b>{{korisnik.uloga}}</label><br>
                    <label class="velikiFont"><b>Ime: </b>{{korisnik.ime}}</label><br>
                    <label class="velikiFont"><b>Prezime: </b>{{korisnik.prezime}}</label><br>
                </div>
            </div>
          </div><br>
          <div class="row mt-1">
          <div class="col-sm-12 text-center"  v-if="this.ulogovan">
            <button class="btn w-100 btn-dark" value="Izmeni profil" v-on:click="izmeniKorisnika(korIme)">Izmeni profil</button>
          </div>
          </div>
          <div class="row mt-1">
          <div class="col-sm-12 text-center" v-if="this.ulogovan">
            <button class="btn w-100 btnSearch" value="Izmeni profil" v-on:click="izlogujSe()">Izloguj se</button>
          </div>       
        </div>
          </div>
            
          <div class="col-sm-6">
             <div class="row justify-content-center mt-2" v-if="this.admin">
                  <button class="btn btn-dark w-75" value="Kreiraj novi objekat" v-on:click="kreirajObjekat()">Kreiraj novi objekat</button>
            </div>
            <div class="row justify-content-center mt-1" v-if="this.admin">
                    <button class="btn btn-dark w-75" value="Vidi sve korisnike" v-on:click="sviKorisnici()">Vidi sve korisnike</button>
            </div>
            <div class="row justify-content-center mt-1" v-if="this.menadzer">
                    <button class="btn btn-dark w-75" value="Sva vozila" v-on:click="pregledObjekta(objekatId)">Pregled objekta</button>
            </div>
            <div class="row justify-content-center mt-1" v-if="this.kupac">
                    <button class="btn btn-dark w-75" v-on:click="prikazPorudzbinaKupac">Sve porudžbine</button>
            </div>
        </div>
        
        <div v-if="!this.ulogovan">
          <label>Nisi ulogovan!</label><br>
          <a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link">Uloguj se</a></li>
        </div>
        </div><br><br><br><br><br>
         </div>

	        <footer class="text-center text-lg-start text-white d-flex flex-column mt-auto">
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
					   
	</div>
	`,
	mounted(){
		this.korIme=this.$route.params.korIme;
		if((this.korIme==="")||!(this.korIme==="undefined"))
		{
			
		axios.get("rest/korisnik/ucitaj/"+this.korIme)
		.then(response => {
		this.korisnik = response.data
		this.ulogovan=true;
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
			
		return axios.get("rest/menadzer/objekat/"+this.korIme)}).then(response=>
		{
			this.objekatId=response.data
		});
		
		}
		
		
	}
	, 
	methods : {
		izmeniKorisnika: function(korIme){
			event.preventDefault()
			router.push(`/izmenaKorisnika/${korIme}`);
		},
		izlogujSe:function()
		{
			event.preventDefault()
			axios.post('rest/korisnik/izlogujse');
			router.push(`/`);
		},
		kreirajObjekat: function()
		{
			event.preventDefault()
			router.push(`/kreiranjeobjekta/menadzer`);
		},
		
		sviKorisnici: function()
		{
			event.preventDefault()
			router.push(`/prikazsvihkorisnika`);
		},
		
		prikazPorudzbinaKupac : function(){
			router.push(`/prikazPorudzbina`)
		},
		
		pregledObjekta : function(objId){
			router.push(`/prikazMneadzerovogObjekta/${objId}`)	
		}
	}

});