import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import LinearDeterminate from '../../pages/LinearDeterminate'
import axios from 'axios';
import config from '../../config/config';
import { TEXT } from '../../config/TEXT';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
        margin: theme.spacing(2),
        maxWidth: '100%', // Adjust the spacing as needed
    },
}));

const commonCellStyle = {
    padding: '12px',
    border: '1px solid white',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};


const CustomTableRow = ({ data, backgroundColor }) => {
    return (
        <TableRow key={data.name} sx={{ backgroundColor: backgroundColor }}>
            <TableCell sx={commonCellStyle}>{data.sNo}</TableCell>
            <TableCell
                sx={{
                    ...commonCellStyle,
                    maxWidth: '100px',
                }}
            >
                {data.applicationOrService && data.applicationOrService.length > 20 ? (
                    <Tooltip title={data.applicationOrService} arrow
                        sx={{
                            maxWidth: '100',

                        }}
                    >
                        {data.applicationOrService}
                    </Tooltip>
                ) : (
                    data.applicationOrService
                )}
            </TableCell>
            <TableCell sx={commonCellStyle}>{data.newTicket}</TableCell>
            <TableCell sx={commonCellStyle}>{data.openCount}</TableCell>
        </TableRow>
    );
}
const buildApiUrl = (baseUrl, startDate, endDate, ticketType) => {
    let url = `${baseUrl}?startDate=${startDate}&endDate=${endDate}&page=drilldown`;
    url += `&ticketType=${ticketType}`;
    return url;
};


export default function OpenedTktPopup({ onClose, startDate, endDate, ticketType }) {
    const [open, setOpen] = useState(true);
    const [data, setData] = useState([]);
    const [progressComplete, setProgressComplete] = useState(false);

    useEffect(() => {
        const fetchOpenTktPopup = async () => {
            try {
                setProgressComplete(true);
                //     const response = await axios.get(`${config[process.env.REACT_APP_ENV].openTktPopupUrl}?startDate=${startDate}&endDate=${endDate}&page=drilldown`)
                //     setData(response.data);
                   
                // } catch (error) {
                // Use the buildApiUrl function to construct the URL
                const url = buildApiUrl(
                    config[process.env.REACT_APP_ENV].openTktPopupUrl,
                    startDate,
                    endDate,
                    ticketType
                );

                // Fetch data from the constructed URL
                const response = await axios.get(url);
                console.log('open tickets drill down', response.data)
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                setData(response.data);

            } catch (error) {

                console.error('Error fetching data:', error);
            } finally {
                setProgressComplete(false);
            }
        };

        if (open) {
            fetchOpenTktPopup();
        }
    }, [open, startDate, endDate,ticketType])


    const handleClose = () => {
        setOpen(false);
        onClose()
    };
    const handleDialogClick = (e) => {
        e.stopPropagation();
    };
    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                onClick={handleDialogClick}
            >
                <div style={{ backgroundColor: '#EEEEEE' }}>
                    <DialogTitle sx={{ m: 0, p: 2, color: '#FF6600',fontSize:'16.6px' }} id="customized-dialog-title">
                       {TEXT.SNOW_DRILL_TITLE.OPEN_TKT}
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'black',
                        }}
                    >
                        <CloseIcon />
                    </IconButton></div>

                <Paper sx={{ overflowY: 'auto', height: '70vh',minWidth:'56vh' }}>
                    <Table >
                        <TableHead sx={{ backgroundColor: '#FF6600', position: 'sticky', top: '0' }}>
                            <TableRow sx={{ backgroundColor: '#FF8533', }}>
                                <TableCell sx={{ color: 'white', width: 'auto', ...commonCellStyle }}>Sr No.</TableCell>
                                <TableCell sx={{ color: 'white', width: 'auto', ...commonCellStyle }}>Team</TableCell>
                                <TableCell sx={{ color: 'white', width: 'auto', ...commonCellStyle }}>New</TableCell>
                                <TableCell sx={{ color: 'white', width: 'auto', ...commonCellStyle }}>Open</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {progressComplete && (
                                <TableRow>
                                    <TableCell colSpan={5} style={{ textAlign: 'center' }}>
                                        <LinearDeterminate />
                                    </TableCell>
                                </TableRow>
                            )}
                            {!progressComplete && (
                                data.map((row, index) => (
                                    <CustomTableRow
                                        key={row.sNo}
                                        data={row}
                                        index={index}
                                        backgroundColor={index % 2 === 0 ? '#F4F4F4' : '#EBEBEB'}
                                    />
                                ))
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </BootstrapDialog>
        </React.Fragment>
    );
}
