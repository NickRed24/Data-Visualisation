import React from "react";
import Card from "@material-ui/core/Card";
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid, Brush,LineChart, Line,AreaChart,Area,Tooltip  } from 'recharts';

import * as data from "../data.js"
import {processedData} from "../util/datagrabber.js"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router";

const refinedData = processedData(data);

const EducationPageRouter = (classes, theme) => (

    <Card className={classes.root}>
      <CardContent>
       
 <Typography variant="display1">Car and Phone Sales</Typography>
		<AreaChart width={1500} height={500} data={refinedData}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="date" />
  <XAxis tick={false} />
  <XAxis tick={{stroke: 'red', strokeWidth: 2}} />
  <YAxis />
  <CartesianGrid strokeDasharray="2 2" />
  <Tooltip />
  <Area type="monotone" dataKey="car" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="phone" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
	
      </CardContent>
    </Card>   
);

const EducationPage = withRouter(EducationPageRouter);

export default (EducationPage);