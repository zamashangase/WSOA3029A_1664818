const data = [
    {name: 'Animation', score: 80},
    {name: 'Comedy', score: 90},
    {name: 'Romance', score: 50},
    {name: 'Drama', score: 10},
    {name: 'Studio Ghibli', score: 65},
    {name: 'Family', score: 70},
    {name: 'Disney', score: 85},
    {name: 'Fantasy', score: 40},
    {name: 'Marvel', score: 95},
    {name: 'DC', score: 65},
    {name: 'Warner Bros.', score: 75},
];
const width = 1800;
const height = 700;
const margin = {top: 30, bottom: 30, left: 50, right: 50};

const svg = d3.select('#d3-container')
 .append('svg')
 .attr('height', height - margin.top - margin.bottom)
 .attr('width', width - margin.left - margin.right)
 .attr('viewBox', [0, 0, width, height])

 const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0,3);

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top]);
svg
 .append('g')
 .attr('fill', '#d8697b')
 .selectAll('rect')
 .data(data.sort((a, b) => d3.descending(a.score, b.score)))
 .join('rect')
   .attr('x', (d, i) => x(i))
   .attr('y', (d)=> y(d.score))
   .attr('height', d => y(0) - y(d.score))
   .attr('width', x.bandwidth())

   function xAxis(g){
   g.attr('transform', `translate(0, ${height - margin.bottom}`)
   .call(d3.axisBottom(x).tickFormat(i => data[i].name))
   .attr('font-size', '20px')
   }

   function yAxis(g){
    g.attr('transform',`translate( ${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
}
svg.append('g').call(xAxis);
svg.append('g').call(yAxis);
svg.node();