import styles from "./contact-us.module.css";
import Header from "../../components/Header";

export default function ContactUs() {
	return (
		<div className={styles.contact_us_container}>
			<Header isStaticColor={true} />

			<form action="https://getform.io/f/bnlnlqgb" method="POST" className={styles.form_container}>
				<input type="text" name="name" placeholder="Name" required />
				<input type="email" name="email" placeholder="Email" required />
				<textarea name="message" placeholder="Message" id={styles.message_input} maxLength={350} required />
				<input type="hidden" name="_gotcha" style={{ display: "none !important" }} />
				<div className={styles.radio_buttons}>
					<h1>Work type:</h1>
					<div>
						<input type="radio" value="asphalt" name="work-type" id="asphalt" className={styles.radio_button} defaultChecked />
						<label htmlFor="asphalt">Asphalt</label>
					</div>
					<div>
						<input type="radio" value="concrete" name="work-type" id="concrete" className={styles.radio_button} />
						<label htmlFor="concrete">Concrete</label>
					</div>
				</div>
				<button type="submit" className={styles.submit_button}>Send</button>
			</form>
		</div>
	);
}
