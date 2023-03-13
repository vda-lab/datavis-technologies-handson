<script>
    // Dimensions
    const width = 800;
    const height = 100;
    const margin = { top: 10, right: 20, bottom: 20, left: 20 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    // Arrays
    const points = [
      innerWidth / 2 - 60,
      innerWidth / 2 - 30,
      innerWidth / 2,
      innerWidth / 2 + 30,
      innerWidth / 2 + 60
    ];
  
    // All lights with a higher index are on!
    let index = points.length;
  
    // Color
    let color = "darkred";
  </script>
  
  <svg viewBox="0 0 {width} {height}">
    <g transform="translate({margin.left},{margin.top})">
      <!--  -->
    </g>
  </svg>
  