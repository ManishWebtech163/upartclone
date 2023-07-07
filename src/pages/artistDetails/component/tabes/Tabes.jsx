import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GalleryTab from './GalleryTab';
import ReviewsTab from './ReviewsTab';
import Achievements from './Achievements';
import Packages from './Packages';


export default function Tabes() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="artistDetailsTabs">
            <TabContext value={value}>
                <Box className="tabsDiv" >
                    <TabList onChange={handleChange} color="primary" variant="scrollable" scrollButtons={false}>
                        <Tab label="Portfolio" value="1" />
                        <Tab label="Reviews" value="2" />
                        <Tab label="Achievements" value="3" />
                        <Tab label="Packages" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: "0" }}><GalleryTab /></TabPanel>
                <TabPanel value="2" sx={{ padding: "0" }}><ReviewsTab /></TabPanel>
                <TabPanel value="3" sx={{ padding: "0" }}><Achievements /></TabPanel>
                <TabPanel value="4" sx={{ padding: "0" }}><Packages /></TabPanel>
            </TabContext>
        </div>
    )
}
