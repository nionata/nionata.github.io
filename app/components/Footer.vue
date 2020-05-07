<template>
    <div id="footer" class="col">
		<div id="contactContainer" class="item row">
			<div class="item contact" v-for="contact in contacts" :key="contact.icon">
				<a :href="contact.link" target="_blank">
					<i class="fa fa-3x" :class="contact.icon" />
				</a>
			</div>
		</div>
		<h3 class="item">
			Nicholas Ionata 2020 
			<i class="fa fa-code" />
		</h3>
	</div>
</template>

<script>
import '../styles/footer.sass'
import contacts from '../js/contacts'

export default {
	data() {
		return {
			contacts
		}
	}
 }
</script>