import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import API from '../../../utils/api'

const Login = () => {
  const navigate = useNavigate() 
  
  // State untuk menampung input kredensial user
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  //Ubah fungsi ini menjadi async untuk memproses AJAX kiriman login
  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      username: loginData.username,
      password: loginData.password,
    }

    try {
      console.log('Mengirim kredensial login ke BE:', payload)
      
      // 1. Tembak rute autentikasi milik backend kamu
      const response = await API.post('/authentication', payload)
      
      // 2. Ambil token murni dari struktur respons response.data.data
      const token = response.data.data.accessToken
      
      // 3. Simpan token JWT ke dalam amunisi localStorage browser
      localStorage.setItem('accessToken', token)
      
      alert('Login berhasil!')
      
      // 4. Lempar user langsung masuk meluncur ke halaman dasbor keuangan
      navigate('/dashboard')
      
    } catch (error) {
      console.error('Error saat login:', error)
      // Tangkap pesan eror asli yang dilempar dari penanganan Exception backend kamu
      alert(error.response?.data?.message || 'Gagal masuk. Periksa kembali username dan password kamu!')
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={8} xl={7}>
            <CCardGroup>
              
              {/* ================= SISI KIRI: FORM LOGIN ================= */}
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLoginSubmit}>
                    <h2 className="fw-bold text-dark mb-1">Login</h2>
                    <p className="text-muted mb-4">Masuk ke dasbor keuangan warung kamu</p>
                    
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="username"
                        placeholder="Username"
                        value={loginData.username}
                        onChange={handleInputChange}
                        required
                      />
                    </CInputGroup>
                    
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </CInputGroup>
                    
                    <CRow>
                      <CCol xs={12}>
                        <CButton color="primary" type="submit" className="px-4 w-100 fw-bold">
                          Masuk Aplikasi
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              
              {/* ================= SISI KANAN: AJAKAN DAFTAR ================= */}
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center d-flex align-items-center justify-content-center">
                  <div>
                    <h3 className="fw-bold mb-2">Belum Punya Akun?</h3>
                    <p className="small opacity-75 mb-4">
                      Daftarkan diri dan usaha warung kamu sekarang untuk menikmati analisis keuangan berbasis kecerdasan buatan.
                    </p>
                    <Link to="/register">
                      <CButton color="light" className="mt-3 active fw-bold text-primary" tabIndex={-1}>
                        Daftar Warung Baru
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login