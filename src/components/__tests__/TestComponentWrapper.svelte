<script lang="ts">
	// This component is used to test if the TestComponent slots
	// render correctly. Currently Svelte testing library
	// is unable to programmaticaly render components with slots.

	import TestComponent from '../TestComponent.svelte';
</script>

<TestComponent testProp="Test prop renders correctly">Test slot renders correctly</TestComponent>
