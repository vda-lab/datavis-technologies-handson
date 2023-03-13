<script>
    // Dimensions
    const width = 800;
    const height = 100;
    const margin = { top: 20, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    // Array
    const values = [
      { x: 2, y: 1, category: "cat1" },
      { x: 4, y: 2, category: "cat3" },
      { x: 6, y: 1, category: "cat2" },
      { x: 7, y: 3, category: "cat3" },
      { x: 9, y: 1, category: "cat2" }
    ];
  </script>
  
  <svg viewBox="0 0 {width} {height}">
    <g transform="translate({margin.left},{margin.top})">
      <!--  -->
    </g>
  </svg>
  
  <style>
    text {
      text-anchor: middle;
      font-size: small;
    }
  </style>
  