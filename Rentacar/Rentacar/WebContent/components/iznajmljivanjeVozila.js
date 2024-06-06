Vue.component("iznajmljivanjeVozila", {
	data: function () {
		return {		
			ulogovan: null,
			korisnik:{korisnickoIme:"",uloga:"",ime:"",prezime:"",pol:"",datumRodjenja:"",lozinka:"",id:""},
			
			pretraga:{pocetniDatum: null, krajnjiDatum: null},
			
			dugmePritisnuto: false,
			dodajPritisnuto: false,
			
			vozila: {},
			
			brojVozila: 0,
			vozilaUKorpi: []
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
                            <li><a v-bind:href="'/WebShopREST/#/'" class="nav-link">Objekti</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/iznajmljivanjeVozila'" class="nav-link active">Iznamji</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/profil/'+this.korisnik.korisnickoIme" class="nav-link" v-if="ulogovan">Profil</a></li>
                        </ul>
                        
                        <ul class="navbar-nav navbar-right w-25 justify-content-end">
                            <li><a v-bind:href="'/WebShopREST/#/loggovanje'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Uloguj se</a></li>
                            <li><a v-bind:href="'/WebShopREST/#/registracija'" class="nav-link" v-if="!ulogovan"><span class="glyphicon glyphicon-log-in"></span> Registuj se</a></li>
                        </ul>
                    </div>
                </nav>
		<br><br><br>
		
		<div class="row pretraga bg-white shadow rounded sadrzajDiva " v-if="ulogovan">
			<div style="padding-right: 0%" class="row">
            	<div class="col-sm-10">
            		<h2 class="headerUDivu">Period iznajmljivanja</h2>
            	</div>
        	</div>
        	
			<div class="col-sm-12">
	        	<label>Početni datum</label>
            	<div class="input-group inputPretraga">
                    <div class="input-group">
						<input type="date" v-model="pretraga.pocetniDatum" class="inputPretraga form-control">                                                
					</div>
           		</div><br>
           	</div>
           	<div class="col-sm-12">
	        	<label>Krajnji datum</label>
            	<div class="input-group inputPretraga">
                    <div class="input-group">
						<input type="date" v-model="pretraga.krajnjiDatum" class="inputPretraga form-control">                                                
					</div>
           		</div><br>
           	</div>
           	<div class="col-sm-12">
                <button type="submit" v-on:click="pretrazi" class="btn px-4 float-end mt-4 btnSearch">Pretraži</button>
            </div>
		</div><br><br>
		
		<table class="styled-table" v-if="dugmePritisnuto && this.ulogovan">
			<thead>
				<tr>
					<th class="centralnoPoravnanje logoTd">Slika</th>
					<th class="centralnoPoravnanje">Marka</th>
					<th class="centralnoPoravnanje">Model</th>
					<th class="centralnoPoravnanje">Cena</th>
					<th class="centralnoPoravnanje">Tip</th>
					<th class="centralnoPoravnanje">Vrsta</th>
					<th class="centralnoPoravnanje">Tip goriva</th>
					<th class="centralnoPoravnanje">Potrosnja</th>
					<th class="centralnoPoravnanje">Broj vrata</th>
					<th class="centralnoPoravnanje">Broj osoba</th>
					<th class="centralnoPoravnanje">Opis</th>
					<th class="centralnoPoravnanje">Korpa</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(v, index) in vozila">
					<td class="logoTd">
						<div class="imageDiv">
							<img v-bind:src = "v.slika" class="imageClass"/>
						</div>
					</td>
					<td>{{v.marka}}</td>
					<td>{{v.model}}</td>
					<td class="centralnoPoravnanje">{{v.cena}}</td>
					<td>{{v.tip}}</td>
					<td>{{v.vrsta}}</td>
					<td>{{v.tipGoriva}}</td>
					<td class="centralnoPoravnanje">{{v.potrosnja}}</td>
					<td class="centralnoPoravnanje">{{v.brojVrata}}</td>
					<td class="centralnoPoravnanje">{{v.brojOsoba}}</td>
					<td>{{v.opis}}</td>
					<td><button type="submit" v-on:click="dodajUKorpu(v.id)" class="btn px-4 float-end btnSearch">Dodaj</button></td>
				</tr>
			</tbody>
		</table><br><br>   

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
		  
		  <section class="d-flex justify-content-between p-2 stickyKorpa" v-if="dodajPritisnuto">
		  	<div class="col-sm-6 stanjeUKorpi">
				<p>Trenutno stanje u korpi -></p>
			</div>
		  	<div class="col-sm-6">
		  		<button type="submit" v-on:click="pregledKorpe" class="btn px-4 float-end btnSearch btnKorpa">{{brojVozila}} <i class="fa fa-shopping-cart"></i></button>
		  	</div>
		  </section>
	</div>
	`
	,
	methods: {
		pretrazi : function(){
			var trenutniDatum = new Date();
			var izabraniPocetniDatum = new Date(this.pretraga.pocetniDatum)
			var izabraniKrajnjiDatum = new Date(this.pretraga.krajnjiDatum)
			
			var validno = true;
			
			if(trenutniDatum.getTime() >= izabraniPocetniDatum.getTime() || izabraniPocetniDatum.getTime() >= izabraniKrajnjiDatum.getTime())
				validno = false;
			
			
						
			if(validno){
				this.dugmePritisnuto = true;
				
				this.vozilaUKorpi = []
				this.brojVozila = 0
				this.dodajPritisnuto = false;
				
				axios
					.get('rest/vozilo/dobaviSlobodne/' + this.pretraga.pocetniDatum + '/' + this.pretraga.krajnjiDatum)
					.then(response => (this.vozila = response.data))
			}
			else{
				this.dugmePritisnuto = false;
				
				alert("Morate uneti datume koji nisu pre danasnjeg i pocetni mora biti pre krajnjeg");
			}
		},
		
		dodajUKorpu : function(idVozila){
			this.dodajPritisnuto = true;
			
			var jedinstveno = true;
			for(let i = 0; i < this.brojVozila; i++){
				if(this.vozilaUKorpi[i] === idVozila){
					jedinstveno = false;
				}
			}
			
			if(jedinstveno){
				this.vozilaUKorpi[this.brojVozila] = idVozila;
				this.brojVozila++;
			}
		},
		
		pregledKorpe : function(){			
			router.push(`/pregledKorpe/${this.pretraga.pocetniDatum}/${this.pretraga.krajnjiDatum}/${this.vozilaUKorpi}`)
		}
		
	},
	mounted() {
		axios.post('rest/korisnik/ulogovan')
			.then(response => {
				this.korisnik=response.data;
				
				if(this.korisnik)
					this.ulogovan=true;
				else
					this.ulogovan=false;
			})
	}
});