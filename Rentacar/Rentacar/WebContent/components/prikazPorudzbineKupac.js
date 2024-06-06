Vue.component("PrikazPorudzbineKupac", {
	data: function () {
		return {			
			ulogovan: null,
			korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
			
			porudzbina: {id: null, vozila: [], objekat: null, datumIznajmljivanja: null, trajanjeNajma: null, cena: null, kupac: null, korisnickoImeKupca: null, status: null},
			obrada:"obrada", 
			id:null
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
                            <li><a v-bind:href="'/WebShopREST/#/iznajmljivanjeVozila'" class="nav-link">Iznamji</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/profil/'+this.korisnik.korisnickoIme" class="nav-link" v-if="ulogovan">Profil</a></li>
                        </ul>
                        
                        <ul class="navbar-nav navbar-right w-25 justify-content-end">
                            <li><a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Uloguj se</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/registracija'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Registuj se</a></li>
                        </ul>
                    </div>
                </nav>
		<br><br><br>
		<div class="container-fluid" >
			
			<div class="col-sm-12" v-if="ulogovan">
				<table class="styled-table">
						<thead>
							<tr>
								<th class="centralnoPoravnanje">Slika</th>
								<th class="centralnoPoravnanje">Marka</th>
								<th class="centralnoPoravnanje">Model</th>
								<th class="centralnoPoravnanje">Cena</th>
								<th class="centralnoPoravnanje">Tip goriva</th>
								<th class="centralnoPoravnanje">Objekat</th>
								<th class="centralnoPoravnanje">Pocetni datum</th>
								<th class="centralnoPoravnanje">Krajnji datum</th>
								<th class="centralnoPoravnanje">Status</th>
							</tr>
						</thead>
						<tbody>
						      <tr v-for="(vozilo, vIndex) in porudzbina.vozila" :key="vIndex">
						      <td class="logoTd">
									<div class="imageDiv">
										<img v-bind:src = "vozilo.slika" class="imageClass"/>
									</div>
								</td>
						        <td>{{ vozilo.marka }}</td>
						        <td>{{ vozilo.model }}</td>
						        <td class="centralnoPoravnanje">{{ vozilo.cena }}</td>
						        <td>{{ vozilo.tipGoriva }}</td>
						        <td>{{porudzbina.objekat.naziv}}</td>
						        <td>{{
									new Date(porudzbina.datumIznajmljivanja.year,
									porudzbina.datumIznajmljivanja.monthValue - 1,
									porudzbina.datumIznajmljivanja.dayOfMonth).toLocaleDateString()
						        }}</td>
						        <td>{{
									new Date(porudzbina.datumIznajmljivanja.year,
									porudzbina.datumIznajmljivanja.monthValue - 1,
									porudzbina.datumIznajmljivanja.dayOfMonth + porudzbina.trajanjeNajma).toLocaleDateString()
								}}</td>
								<td>{{porudzbina.status}}</td>
						      </tr>
						</tbody>
					</table><br><br>
					<div class="col-sm-12 d-flex justify-content-center align-items-cente	">
						<button v-if="porudzbina.status===obrada" type="submit" v-on:click="otkaziPorudzbinu(id)" class="btn btnSearch">Otkazi</button>
					</div>
					<br><br>

			</div>
			<div v-if="!ulogovan">
				<br><br>
				<label>Niste ulogovani!</label>
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
	`
	,
	methods: {
		otkaziPorudzbinu:function(idx)
		{
			axios.
				get('rest/porudzbina/otkazi/'+idx).
				then(response=>{
					const valid=response.data
					if(valid)
						alert("Uspesno");
					else
						alert("Neuspesno");
					return axios
					.get('rest/porudzbina/dobaviPorudzbinu/' + this.id)
				}).then(response => 
			{
				this.porudzbina = response.data
				bodovi=this.porudzbina.cena/1000*133
				axios.put('rest/kupac/oduzmibodove/'+this.korisnik.korisnickoIme+"/"+bodovi);
			})
		}
	},
	mounted() {
		this.id = this.$route.params.id
		axios
			.post('rest/korisnik/ulogovan')
			.then(response => {
				this.korisnik=response.data;
				if(this.korisnik)
					this.ulogovan=true;
				else
					this.ulogovan=false;
				
				return axios
					.get('rest/porudzbina/dobaviPorudzbinu/' + this.id)
					})
			.then(response => 
			{
				this.porudzbina = response.data
			})
	}
});