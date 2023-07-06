import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/Dashboard/Dashboard';
import { DASHBOARD, VENDOR, VENDOR_APPROVAL, VENDOR_CREATION, VENDOR_DETAILS } from './utils/Routes';
import VendorCreation from './screens/VendorCreation/VendorCreation';
import Login from './screens/Login/Login';
import Vendor from './screens/VendorCreation/Vendor';
import VendorDetails from './screens/VendorCreation/VendorDetails';
import VendorApproval from './screens/VendorApproval/VendorApproval';
import { useEffect } from 'react';
import { setAuthDataOnRender } from './redux/action/authAction';
import { connect } from 'react-redux';

function App(props) {
    useEffect(() => {
      props.setAuthDataOnRender();
    }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route element={<Dashboard />} path={DASHBOARD} exact />
        <Route element={<VendorCreation />} path={VENDOR_CREATION} />
        <Route element={<Vendor />} path={VENDOR} />
        <Route element={<VendorDetails />} path={VENDOR_DETAILS} />
        <Route element={<VendorApproval />} path={VENDOR_APPROVAL} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  IS_AUTH: state.auth.is_auth,
});

export default connect(mapStateToProps, { setAuthDataOnRender })(App);
