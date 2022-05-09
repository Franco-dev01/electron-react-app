import CustomCard from "../../layouts/card";
import { Grid, Stack, Table, TableCell, TableRow, TextField, Typography } from "@mui/material";
import React from "react";
import { TopSellingProduct } from "../../__mocks__";
import SaleRepportChart from "./saleReportChart";
import UserChart from "./userChart";

const Dashboard: React.FC = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ fontSize: 20 }}>
            Overrise
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomCard>
              <Stack direction="column" spacing={2} justifyContent="space-around">
                <Typography color="secondary" fontSize={13}>
                  Total Profile
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography component="strong" sx={{ fontSize: 20 }}>
                    $99,595
                  </Typography>
                  <Typography
                    color="success"
                    component="small"
                    sx={{ fontSize: 15, color: "#05C180" }}>
                    +3,57%
                  </Typography>
                </Stack>
              </Stack>
            </CustomCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomCard>
              <Stack direction="column" spacing={2} justifyContent="space-around">
                <Typography color="secondary" fontSize={13}>
                  Total expenses
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography component="strong" sx={{ fontSize: 20 }}>
                    $12,789
                  </Typography>
                  <Typography
                    color="success"
                    component="small"
                    sx={{ fontSize: 15, color: "#05C180" }}>
                    +2,27%
                  </Typography>
                </Stack>
              </Stack>
            </CustomCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomCard>
              <Stack direction="column" spacing={2} justifyContent="space-around">
                <Typography color="secondary" fontSize={13}>
                  New users
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography component="strong" sx={{ fontSize: 20 }}>
                    $1,984
                  </Typography>
                  <Typography
                    color="success"
                    component="small"
                    sx={{ fontSize: 15, color: "#EF2631" }}>
                    -2,27%
                  </Typography>
                </Stack>
              </Stack>
            </CustomCard>
          </Grid>{" "}
          <Grid item xs={12} md={12}>
            <CustomCard>
              <SaleRepportChart />
            </CustomCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} textAlign="center">
            <TextField type="date" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} md={6} textAlign="right">
            <TextField type="date" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} md={12}>
            <CustomCard>
              <Stack direction="column">
                <Typography component="h1">To selling Products</Typography>
                <Table padding="normal">
                  {TopSellingProduct?.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img src={product.imgUrl} width={50} height={50} />
                      </TableCell>
                      <TableCell>{product.label}</TableCell>
                      <TableCell>{product.price}</TableCell>
                    </TableRow>
                  ))}
                </Table>
              </Stack>
            </CustomCard>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <CustomCard>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias dolor facilis quam
              aspernatur consequatur quasi eveniet cupiditate, deserunt tenetur iusto iste, velit
              Lorem ipsum dolor sit amet consectetur
            </CustomCard>
          </Grid>
          <Grid item xs={12} md={12}>
            <CustomCard>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias dolor facilis quam
              aspernatur consequatur quasi eveniet cupiditate, deserunt tenetur iusto iste, velit
              Lorem ipsum dolor sit amet consectetur
            </CustomCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomCard>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, corrupti possimus.
          Aspernatur incidunt consectetur unde quisquam eveniet eius in consequatur exercitationem,
          non laudantium optio id, aliquam libero debitis? Iusto, fuga deserunt officiis quibusdam
          incidunt vero id dolor, pariatur iure voluptatibus vitae deleniti ab cumque totam
          corporis. Debitis, quibusdam quo aperiam, nemo earum veniam numquam iste dolor consequatur
          sunt aliquid optio qui repellat odit hic perspiciatis doloribus distinctio! Distinctio
        </CustomCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomCard>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptatibus dicta
          placeat facere et hic minima culpa quasi quaerat provident quia adipisci, accusantium eos
          nam ab, laborum amet perspiciatis, maxime ut. Repellat incidunt, aliquid sequi cupiditate
          dolor, illo voluptatibus tempora perferendis libero ipsa id mollitia iure amet enim
          ducimus? Eos modi excepturi, ducimus quis ipsa sed. Dicta, quibusdam! Distinctio est vero
          voluptatum itaque aliquid commodi debitis earum veniam laboriosam officiis deleniti odit,
        </CustomCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
