import React, {useState} from "react";

// 컴포넌트 import
import ModelData from "./ModelData";

// material-ui/core에서 import
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      overflow: "auto"
    },
    tableHead: {
      fontSize: "1.0rem",
    },
    tableCell_low: {
      [theme.breakpoints.down('xs')]: {
        display: "none"
      },
    },
    tableCell_medium: {
      [theme.breakpoints.down('sm')]: {
        display: "none"
      },
    },
    tableCell_high: {
      [theme.breakpoints.down('md')]: {
        display: "none"
      },
    },
}));

const ModelDatas = (props) => {

    const [dataType, setDataType] = useState("id");
    const [sortType, setSortType] = useState(true);
    const classes = useStyles();

    const changeSortType = (event, type) => {
        event.preventDefault();
        if (dataType === type) {
            setSortType(!sortType);
        } else {
            setDataType(type);
            setSortType(true);
        }
        props.onChangeSortType(dataType, sortType);
    }

    const ChangeData = (e) => {
        props.onChangeData(e);
    }

    var lists = [];
    for (var i in props.datas){
      lists.push(<ModelData key={props.datas[i].id} data={props.datas[i]} onChangeData={ChangeData}></ModelData>)
    }
    
    return(
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead className={classes.TableHead}>
              <TableRow>
                <TableCell><Button onClick={(event) => changeSortType(event, "name")}>이름</Button></TableCell>
                <TableCell className={classes.tableCell_low}><Button onClick={(event) => changeSortType(event, "type")}>회귀/분류</Button></TableCell>
                <TableCell className={classes.tableCell_medium}><Button onClick={(event) => changeSortType(event, "loss_type")}>loss 종류</Button></TableCell>
                <TableCell className={classes.tableCell_low}><Button onClick={(event) => changeSortType(event, "loss")}>loss</Button></TableCell>
                <TableCell className={classes.tableCell_medium}><Button onClick={(event) => changeSortType(event, "accuracy")}>정확도</Button></TableCell>
                <TableCell className={classes.tableCell_medium}><Button onClick={(event) => changeSortType(event, "language")}>언어 종류</Button></TableCell>
                <TableCell className={classes.tableCell_high}><Button onClick={(event) => changeSortType(event, "date_create")}>생성 날짜</Button></TableCell>
                <TableCell className={classes.tableCell_high}><Button onClick={(event) => changeSortType(event, "date_modify")}>수정 날짜</Button></TableCell>
                <TableCell>확인</TableCell>
                <TableCell>삭제</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists}
            </TableBody>
          </Table>
        </Paper>
    );
}

export default ModelDatas;