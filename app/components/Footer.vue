<template>
    <div id="footer" class="col">
		<Contacts />
		<h3 class="item">
			Nicholas Ionata 2020 
			<i class="fa fa-code" />
		</h3>
	</div>
</template>

<script>
import 'styles/footer.sass'
import Contacts from 'comp/Contacts'

export default {
	components: { Contacts, },
 }
</script>