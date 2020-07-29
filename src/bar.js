/** 
 * 
 * bar.js
 * simple, elegant bar chart library
 * {date} - version 1.0
 * {url}
 * 
 * Copyright 2020 {your name}
 * Release under MIT licence
 * {Licence url}
 * 
 */

(function(){
    'use strict';

    var chart;

    window.BarChart = function( targetId, width, height, data){

        //Base
        chart = this;
        
        //Specify Configuration
        chart.configureChart(targetId, width, height, data);

        //Pre Operations
        chart.performPreOperations(); 

        //Draw Chart
        chart.drawChart();

    };


    BarChart.prototype.configureChart = function( targetId, width, height, data){
        
        //Global Canvas Specification
        chart.setCanvasParameters(targetId, width, height, data);
        
        //Global chart Specification
        chart.setChartParameters();
        
        console.log(chart, 'chart');
    }


    BarChart.prototype.setCanvasParameters = function( targetId, width, height, data){

        //Canvas specification come from outside
        chart.id = targetId;
        chart.width = width;
        chart.height = height;
        chart.data = data;
    }


    BarChart.prototype.setChartParameters = function(){

        //Axis Configuration
        chart.axisRatio = 10  //in terms of percentage
        chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
        chart.horizontalMargin = (chart.width * chart.axisRatio) /100;
        chart.axisColor = '#b1b1b1b';
        chart.axisWidth = 0.75;

        //Label Configuration
        chart.fontRatio =3;
        chart.fontFamily = 'times';
        chart.fontStyle = 'normal';
        chart.fontWeight = '300';
        chart.fontColor = '#666';
        chart.verticalFontSize = (chart.height * chart.fontRatio)/100;
        chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;

        //Guidelines Configuration
        chart.guidelineColor = '#e5e5e5';
        chart.guideLineWidth = 0.5;  

    }

    BarChart.prototype.performPreOperations = function(){

        // Create Canvas
        chart.createCanvas();

        // Get data
        chart.handleData();

        //Prepare data
        chart.prepareData();

    }

    BarChart.prototype.createCanvas = function(){
        
        //Create Canvas
        var canvas = document.createElement('canvas');
        canvas.id = chart.id + '-' + Math.random();
        canvas.width = chart.width;
        canvas.height = chart.height;

        // Append canvas to target container
        document.getElementById(chart.id).innerHTML = '';
        document.getElementById(chart.id).appendChild(canvas);

        chart.canvas = canvas;
        chart.context = canvas.getContext('2d');

    }

    BarChart.prototype.handleData = function(){
        //Data sets
        chart.labels = [];
        chart.values = [];

        //handle Data
        chart.data.forEach( function(item){
            chart.labels.push(item.label);
            chart.values.push(item.value);
        });

    };

    BarChart.prototype.prepareData = function(){

        //Global Variables
        chart.itemsNum = chart.data.length;
        chart.maxValue = Math.max.apply(null, chart.values);
        chart.minValue = Math.min.apply(null, chart.values);

        // Axis Specifications
        chart.verticalAxisWidth = chart.height - (2 * chart.verticalMargin);
        chart.horizontalAxisWidth = chart.width - (2 * chart.horizontalMargin);

        // Label Specifications
        chart.verticalUpperBound = Math.ceil( chart.maxValue / 10 ) * 10;
        chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
        chart.horizontalLabelFreq = chart.horizontalAxisWidth / chart.itemsNum;
    }

    BarChart.prototype.drawChart = function(){

        // Vertical Axis
        chart.drawVerticalAxis();
        
        // Vertical Labels
        chart.drawVerticalLabels();

        // Horizontal Axis
        chart.drawHorizontalAxis();

        // Horizontal labels
        chart.drawHorizontalLabels();
         
        // Horizontal Guidelines
        chart.drawHorizontalGuideLines();

        // Vertical Guidelines
        chart.drawVerticalGuideLines();

        // Bars
        chart.drawBars();
    }

    BarChart.prototype.drawVerticalAxis = function(){
        
        //Vertical Axis
        chart.context.beginPath();

        chart.context.strokeStyle= chart.axisColor;
        chart.context.lineWidth = chart.axisWidth;

        chart.context.moveTo( chart.horizontalMargin, chart.verticalMargin);
        chart.context.lineTo( chart.verticalMargin, chart.height - chart.horizontalMargin);
        chart.context.stroke();
    };

    BarChart.prototype.drawVerticalLabels = function(){
        
        //Text specification
        var labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px' + chart.fontFamily;
        chart.context.font = labelFont;
        chart.context.textAlign = 'right';
        chart.context.textBaseline = 'middle';
        chart.context.fillStyle = chart.fontColor;

        //scale values
        var scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;

        //Draw Labels
        for(var i = 0; i <= chart.itemsNum; i++){
            var labelText = chart.verticalUpperBound - i * chart.verticalLabelFreq;
            var verticalLabelX = chart.horizontalMargin - chart.horizontalMargin / chart.axisRatio;
            var verticalLabelY = chart.verticalMargin + i * scaledVerticalLabelFreq;
            chart.context.fillText( labelText, verticalLabelX, verticalLabelY );
        }


    };

    BarChart.prototype.drawHorizontalAxis = function(){
        
        // Horizontal Axis
        chart.context.beginPath(); 
        
        chart.context.strokeStyle = chart.axisColor;
        chart.context.lineWidth = chart.axisWidth;

        chart.context.moveTo( chart.verticalMargin, chart.height - chart.horizontalMargin);
        chart.context.lineTo ( chart.width - chart.verticalMargin, chart.height - chart.horizontalMargin );
        chart.context.stroke();
    };

    BarChart.prototype.drawHorizontalLabels = function(){

       // Text specification
       var labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px' + chart.fontFamily;
       chart.context.textAlign = 'center';
       chart.context.textBaseline = 'top';
       chart.context.font = labelFont; 

       // Draw Labels
       for( var i =0;  i< chart.itemsNum; i++){
           var horizontalLabelX = chart.horizontalMargin + i * chart.horizontalLabelFreq + chart.horizontalLabelFreq / 2;
           var horizontalLabelY = chart.height - chart.horizontalMargin + chart.verticalMargin / chart.axisRatio;
           chart.context.fillText( chart.labels[i], horizontalLabelX, horizontalLabelY);
       }

    }

    BarChart.prototype.drawHorizontalGuideLines = function(){

        //Specifications
        chart.context.strokeStyle = chart.guidelineColor;
        chart.context.lineWidth = chart.guideLineWidth;

        //scale values
        var scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;

        for( var i = 0; i < chart.itemsNum; i++){

            //Starting point coordinates
            var horizontalGuideLineStartX = chart.horizontalMargin;
            var horizontalGuideLineStartY = chart.verticalMargin + i * scaledVerticalLabelFreq;
            
            //Ending point coordinates
            var horizontalGuideLineEndX = chart.horizontalMargin + chart.horizontalAxisWidth;
            var horizontalGuideLineEndY = chart.verticalMargin + i * scaledVerticalLabelFreq;
            
            chart.context.beginPath();
            chart.context.moveTo(horizontalGuideLineStartX, horizontalGuideLineStartY);
            chart.context.lineTo( horizontalGuideLineEndX, horizontalGuideLineEndY)
            chart.context.stroke();
        }

    };
    

    BarChart.prototype.drawVerticalGuideLines = function(){

        //Specifications
        chart.context.strokeStyle = chart.guidelineColor;
        chart.context.lineWidth = chart.guideLineWidth;


        for( var i = 0; i <= chart.itemsNum; i++){

            //Starting point coordinates
            var verticalGuideLineStartX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
            var verticalGuideLineStartY = chart.verticalMargin;
            
            //Ending point coordinates
            var verticalGuideLineEndX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
            var verticalGuideLineEndY = chart.verticalMargin + chart.verticalAxisWidth;
            
            chart.context.beginPath();
            chart.context.moveTo(verticalGuideLineStartX, verticalGuideLineStartY);
            chart.context.lineTo( verticalGuideLineEndX, verticalGuideLineEndY)
            chart.context.stroke();
        }
    };

    BarChart.prototype.drawBars = function(){
        
        for( var i = 0; i<chart.itemsNum; i++){
            
            var color = chart.createRandomRGBColor();
            var fillOpacity = '0.3';
            var fillColor = 'rgba('+color.r+', '+color.g+', '+color.b+', '+fillOpacity+')';
            var borderColor = 'rgba('+color.r+', '+color.g+', '+color.b+')'; 
            
            chart.context.beginPath();
            chart.context.fillStyle = fillColor;
            chart.context.strokeStyle = borderColor;

            var barX = chart.horizontalMargin + ( i * chart.horizontalLabelFreq ) +  chart.horizontalLabelFreq / chart.axisRatio;
            var barY = chart.verticalMargin + chart.verticalAxisWidth;
            var barWidth = chart.horizontalLabelFreq - 2 * chart.horizontalLabelFreq / chart.axisRatio;
            var barHeight = -1 * chart.verticalAxisWidth * chart.values[i] / chart.verticalUpperBound;
            chart.context.rect( barX, barY, barWidth, barHeight);
            chart.context.stroke();
            chart.context.fill();
        }
    };


    BarChart.prototype.createRandomRGBColor = function(){
        var red = getRandomInt( 0, 257);
        var green = getRandomInt( 0, 257);
        var blue = getRandomInt( 0, 257);
        return {r: red, g:green, b:blue};
    }

    function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor (Math.random() *(max - min)) + min;
    }


})()


