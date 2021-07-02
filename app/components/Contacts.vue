<template>
    <div id="contactContainer" class="item rowNarrow">
			<div class="item contact" v-for="contact in contacts" :key="contact.icon">
				<a :href="contact.link" target="_blank">
					<i class="fa fa-3x" :class="contact.icon" />
				</a>
			</div>
		</div>
</template>

<script>
import 'styles/footer.sass'
import contacts from 'js/contacts'

export default {
	data() {
		return {
			contacts
		}
	}
 }
</script>