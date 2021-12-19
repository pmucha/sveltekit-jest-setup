<script lang="ts">
	export let testProp = '';
</script>

<div data-test>
	<p>
		<strong>TestComponent</strong>:<br />
		Test Property: {testProp}
		Test Default Slot: <slot />
	</p>
</div>
