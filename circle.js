function main()
var width = 800
var height = 800
var data = [10, 25, 50, 65, 80]
var colors = ['#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#caf0f8']
var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

var group = svg.selectAll('g')
                .data(data)
                .enter().append('g')
                .attr('transform', function(d, i){
                    return 'translate(0,0)';
                })
                group.append('circle')
                .attr('cx', function(d, i){
                    return i * 100 + 50;
                })
                .attr('cy', function(d, i){
                    return 100;
                })
                .attr('r', function(d){
                    return d * 1.5
                })
                .attr('fill', function(d, i){
                    return colors[i];
                })
                group.append('text')
                       .attr('x', function (d, i){
                           return i * 100 + 40;
                       })
                       .attr('y', 105)
                       .attr('stroke', 'black')
                       .attr('font-size', '50px')
                       .attr('font-family', 'sans-serif')
                       .text(function(d){
                           return d;
                       })