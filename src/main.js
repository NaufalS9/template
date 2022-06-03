import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

$naam = filter_input( INPUT_POST, 'naam', FILTER_SANITIZE_STRING);
if( !$naam || $naam == ' ')
	$errors['naam'] = 'Je hebt geen naam ingevuld';
$adres = filter_input( INPUT_POST, 'adres', FILTER_SANITIZE_STRING);
if( !$adres || $adres == ' ')
	$errors['adres'] = 'Je hebt geen adres ingevuld';
$postcode = filter_input( INPUT_POST, 'postcode', FILTER_SANITIZE_STRING);
if( !$postcode || $postcode == ' ')
	$errors['postcode'] = 'Je hebt geen postcode ingevuld';
$woonplaats = filter_input( INPUT_POST, 'woonplaats', FILTER_SANITIZE_STRING);
if( !$woonplaats || $woonplaats == ' ')
	$errors['woonplaats'] = 'Je hebt geen woonplaats ingevuld';
$email = filter_input( INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
if( !$email || $email == ' ')
	$errors['email'] = 'Je hebt geen email ingevuld';