Vue.prototype.$ulogovan = false;
const Pocetna = { template: '<pocetna></pocetna>' }
const RegistracijaKorisnika = { template: '<registracijakorisnika></registracijakorisnika>' }
const PrikazKorisnika={template: '<PrikazKorisnika></PrikazKorisnika>'}
const Loggovanje = {template: '<loggovanje></loggovanje>'}
const IzmenaKorisnika={template: '<IzmenaKorisnika></IzmenaKorisnika>'}
const KreiranjeObjekta={template: '<KreiranjeObjekta></KreiranjeObjekta>'}
const PrikazSvihVozila={template: '<PrikazSvihVozila></PrikazSvihVozila>'}
const PrikazVozila = {template: '<PrikazVozila></PrikazVozila>'}
const DodavanjeVozila = {template: '<DodavanjeVozila></DodavanjeVozila>'}
const PrikazSvihKorisnika = {template: '<PrikazSvihKorisnika></PrikazSvihKorisnika>'}
const PrikazJednogObjekta = {template: '<prikazJednogObjekta></prikazJednogObjekta>'}
const IznajmljivanjeVozila = {template: '<iznajmljivanjeVozila></iznajmljivanjeVozila>'}
const PregledKorpe = {template: '<pregledKorpe></pregledKorpe>'}
const PrikazPorudzbinaKupca = {template: '<prikazPorudzbinaKupca></prikazPorudzbinaKupca>'}
const PrikazPorudzbinaMenadzer = {template: '<prikazPorudzbinaMenadzer></prikazPorudzbinaMenadzer>'}
const PrikazPorudzbineKupac = {template: '<PrikazPorudzbineKupac></PrikazPorudzbineKupac>'}
const PregledKomentara = {template: '<pregledKomentara></pregledKomentra>s'}
const PrikazMenadzerovogObjekta = {template: '<prikazMenadzerovogObjekta></prikazMenadzerovogObjekta>'}

const router = new VueRouter({
	mode: 'hash',
	  routes: [
		{path:'/', name: 'home', component: Pocetna},
		{path: '/registracija', component: RegistracijaKorisnika},
		{path: '/profil/:korIme',component: PrikazKorisnika},
		{path: '/loggovanje', component: Loggovanje},
		{path: '/izmenaKorisnika/:korIme',component: IzmenaKorisnika},
		{path: '/prikazObjekta/:indx', component: PrikazJednogObjekta},
		{path: '/iznajmljivanjeVozila', component: IznajmljivanjeVozila},
		{path: '/pregledKorpe/:pocetniDatum/:krajnjiDatum/:listaId', component: PregledKorpe},
		{path: '/kreiranjeobjekta/:korIme',component: KreiranjeObjekta},
		{path: '/prikazsvihvozila/:id', component: PrikazSvihVozila},
		{path: '/prikazVozila/:id/:vozId', component: PrikazVozila},
		{path: '/dodavanjeVozila/:id', component: DodavanjeVozila},
		{path: '/prikazsvihkorisnika', component: PrikazSvihKorisnika},
		{path: '/kreiranjeobjekta',component: KreiranjeObjekta},
		{path: '/prikazPorudzbina', component: PrikazPorudzbinaKupca},
		{path: '/prikazPorudzbinaMenadzer', component: PrikazPorudzbinaMenadzer},
		{path: '/prikazPorudzbineKupac/:id', component: PrikazPorudzbineKupac},
		{path: '/pregledKomentara', component: PregledKomentara},
		{path: '/prikazMneadzerovogObjekta/:id', component: PrikazMenadzerovogObjekta}
	  ]
});
var app = new Vue({
	router,
	el: '#products'
});

