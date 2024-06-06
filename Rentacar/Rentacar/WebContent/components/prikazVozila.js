Vue.component("PrikazVozila", {
	data: function () {
		return {
			id: "",
			v: {
				id:null,
			      marka: "",
			      model: "",
			      cena: null,
			      tip: "",
			      vrsta: "",
			      tipGoriva: "",
			      potrosnja: null,
			      brojVrata: null,
			      brojOsoba: null,
			      opis: "",
			      slika: "",
			      status: ""
			    },
			vozId:"",
			ulogovan: null,
			korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""}
		}
	},
	template: ` 
 	<div class="pozadina">
 		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" v-bind:href="'/WebShopREST/#/'">Rent A Car - F1 edition</a>
                        </div>
                        <ul class="vr text-light m-0 p-0">

                       </ul>
                        <ul class="navbar-nav w-75">
                            <li><a v-bind:href="'/WebShopREST/#/'" class="nav-link active">Objekti</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/profil/'+this.korisnik.korisnickoIme" class="nav-link" v-if="ulogovan">Profil</a></li>
                        </ul>
                        
                        <ul class="navbar-nav navbar-right w-25 justify-content-end">
                            <li><a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Uloguj se</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/registracija'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Registuj se</a></li>
                        </ul>
                    </div>
                </nav>
		<br><br><br>
			 <div v-if="!this.ulogovan">
	        	<label>Nisi ulogovan!</label><br>
	        	<a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link">Uloguj se</a></li>
	        </div>	
		<div class="container" v-if="ulogovan">

<div class="container">
  <div class="row">
    <div class="col-sm-12">
        <div class="form-group">
          <label for="marka">Marka:</label>
          <input type="text" id="marka" name="marka" v-model="v.marka" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="model">Model:</label>
          <input type="text" id="model" name="model" v-model="v.model" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="cena">Cena:</label>
          <input type="number" step="10" id="cena" name="cena" v-model="v.cena" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="tip">Tip:</label>
          <input type="text" id="tip" name="tip" v-model="v.tip" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="vrsta">Vrsta:</label>
          <input type="text" id="vrsta" name="vrsta" v-model="v.vrsta" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="tipGoriva">Tip goriva:</label>
          <input type="text" id="tipGoriva" name="tipGoriva" v-model="v.tipGoriva" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="potrosnja">Potrošnja:</label>
          <input type="number" step="0.1" id="potrosnja" name="potrosnja" v-model="v.potrosnja" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="brojVrata">Broj vrata:</label>
          <input type="number" id="brojVrata" step="1" name="brojVrata" v-model="v.brojVrata" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="brojOsoba">Broj osoba:</label>
          <input type="number" id="brojOsoba" step="1" name="brojOsoba" v-model="v.brojOsoba" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="opis">Opis:</label>
          <textarea id="opis" name="opis" v-model="v.opis" class="form-control"></textarea>
        </div>

       
        <div class="form-group last-field">
          <label for="slika">Slika:</label>
          <input type="url" id="slika" name="slika" v-model="v.slika" class="form-control" required>
        </div>
	<br><br>
        
          <div class="col-sm-12 d-flex justify-content-center align-items-cente" v-if="this.ulogovan">
            <button class="btn btn-primary mx-2" value="Izmeni vozilo" v-on:click="izmeni()">Izmeni</button>
            <button class="btn btn-danger mx-2" value="Obrisi vozilo" v-on:click="obrisi()">Obrisi</button>
        </div>
       

    </div>
  </div>
</div>
<br><br> 
		</div>
		
			
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
		</div>
	</div>
	`
	,
	methods: {
		izmeni:function()
		{
			if(this.v.marka === "" || this.v.marka === null ||
				this.v.model === "" || this.v.model === null ||
				this.v.cena === null ||
				this.v.tip === "" || this.v.tip === null ||
				this.v.vrsta === "" || this.v.vrsta === null ||
				this.v.tipGoriva === "" || this.v.tipGoriva === null ||
				this.v.potrosnja === null ||
				this.v.brojVrata === null ||
				this.v.brojOsoba === null ||
				this.v.opis === "" || this.v.opis === null ||
				this.v.slika === "" || this.v.slika === null)
			{
				alert("Popunite sva polja!")
				return;
			}
			axios.
			put('rest/rentACarObjekat/izmenivozilo',this.v)
			.then(response=>{
				const valid=response.data
				return axios.put('rest/vozilo/izmeni',this.v)
			}).then(response=>{
				const valid=response.data
				if(valid)
				{
					router.push(`/prikazsvihvozila/${this.id}`);
					alert("Uspesno izmenjeno");
				}
					
				else
					alert("Neuspesno izmenjeno");
			})
		},
		obrisi:function()
		{
			axios.get('rest/vozilo/obrisiizobjekta/'+this.v.id)
			.then(response => 
			{
				const valid=response.data
				if(valid)
				{
					
					alert("Uspesno izbrisano");
					axios.get('rest/rentACarObjekat/obrisivozilo/'+this.vozId);
					router.push(`/prikazsvihvozila/${this.id}`);
					
				}
				else
					alert("Neuspesno izbrisano");
				
					
			})
		}
	},
	mounted() {
		this.id = this.$route.params.id
		this.vozId=this.$route.params.vozId
		axios
			.get('rest/rentACarObjekat/vozilo/' + this.id+"/"+this.vozId)
			.then(response => {
				this.v = response.data
				return axios.post('rest/korisnik/ulogovan');
					})
			.then(response => 
			{
				this.korisnik=response.data;
				if(this.korisnik)
					this.ulogovan=true;
				else
					this.ulogovan=false;
			})
	}
});