<script>
function  circum_sphere(radius){  
  const circumference=2*Math.PI*radius;
   return circumference
}

const radius = 5;
const circumference =circum_sphere(radius);
</script>
<p>'The circumference of a circle with radius {radius}m is {circumference.toFixed(2)}m.'</p>