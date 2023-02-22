<script>
    import { hljs } from "$lib/highlight";
    export let code = "";
    export let language = "plaintext";
    const formatted = hljs.highlight(code, { language: language }).value;
  </script>
  
  <code class="hljs">{@html formatted}</code>
  