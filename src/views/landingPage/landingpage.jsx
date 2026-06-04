import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CContainer,
  CRow,
  CCol,
  CButton,
  CCard,
  CCardBody,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilGraph, cilWarning, cilChartPie, cilArrowRight } from '@coreui/icons'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-light min-vh-100 text-dark overflow-x-hidden">
      {/* 1. NAVBAR MINI */}
      <nav className="navbar navbar-light bg-white border-bottom py-3 shadow-sm sticky-top">
        <CContainer fluid="md" className="d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-bold text-primary fs-4 mb-0">
            🏪 UMKM Bersama
          </span>
          <CButton color="primary" className="fw-semibold" onClick={() => navigate('/login')}>
            Masuk Aplikasi
          </CButton>
        </CContainer>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="py-5 bg-white border-bottom">
        <CContainer fluid="md" className="py-5 text-center text-md-start">
          <CRow className="align-items-center g-5">
            <CCol md={7}>
              <h1 className="display-4 fw-extrabold text-body mb-3" style={{ lineHeight: '1.2' }}>
                Bawa Warung Kelontongmu <br />
                <span className="text-primary">Naik Kelas dengan AI</span>
              </h1>
              <p className="lead text-body-secondary mb-4 fs-5">
                UMKM Bersama adalah platform manajemen keuangan cerdas yang membantu pemilik warung mengelola pembukuan, meramal kas masa depan, hingga mendeteksi kecurangan kasir secara otomatis menggunakan kecerdasan buatan.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                <CButton color="primary" size="lg" className="d-flex align-items-center justify-content-center gap-2 fw-bold px-4 py-3" onClick={() => navigate('/login')}>
                  Mulai Kelola Sekarang <CIcon icon={cilArrowRight} />
                </CButton>
              </div>
            </CCol>
            <CCol md={5} className="text-center d-none d-md-block">
              {/* Ilustrasi Visual Representatif */}
              <div className="bg-body-tertiary p-5 rounded-circle shadow-inner mx-auto border d-flex align-items-center justify-content-center" style={{ width: '320px', height: '320px' }}>
                <span style={{ fontSize: '120px' }}>📊</span>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </header>

      {/* 3. FITUR UTAMA AI SECTION */}
      <section className="py-5 bg-body-tertiary">
        <CContainer fluid="md" className="py-4">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="fw-bold text-body mb-2">Tiga Otak AI untuk Bisnis Anda</h2>
            <p className="text-body-secondary small">Integrasi data kueri cerdas dan permodelan machine learning canggih di genggaman Anda.</p>
          </div>

          <CRow className="g-4">
            {/* FITUR 1 */}
            <CCol md={4}>
              <CCard className="h-100 border-0 shadow-sm rounded-4">
                <CCardBody className="p-4 text-center text-md-start">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3 d-inline-block mb-3">
                    <CIcon icon={cilGraph} size="xl" />
                  </div>
                  <h5 className="fw-bold text-body mb-2">Cash Flow Forecast</h5>
                  <p className="text-body-secondary small mb-0">
                    Menggunakan model waktu berantai (Time Series LSTM) untuk menerawang proyeksi kas bersih warung besok hari berdasarkan historis transaksi harian secara akurat.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            {/* FITUR 2 */}
            <CCol md={4}>
              <CCard className="h-100 border-0 shadow-sm rounded-4table-danger">
                <CCardBody className="p-4 text-center text-md-start">
                  <div className="bg-danger bg-opacity-10 text-danger p-3 rounded-3 d-inline-block mb-3">
                    <CIcon icon={cilWarning} size="xl" />
                  </div>
                  <h5 className="fw-bold text-body mb-2">Anomaly Alert</h5>
                  <p className="text-body-secondary small mb-0">
                    Sistem audit digital berbasis Isolation Forest. Otomatis mendeteksi pembengkakan biaya, pengeluaran tidak wajar, hingga potensi fraud/kecurangan kasir secara real-time.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            {/* FITUR 3 */}
            <CCol md={4}>
              <CCard className="h-100 border-0 shadow-sm rounded-4">
                <CCardBody className="p-4 text-center text-md-start">
                  <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-3 d-inline-block mb-3">
                    <CIcon icon={cilChartPie} size="xl" />
                  </div>
                  <h5 className="fw-bold text-body mb-2">BCG Matrix</h5>
                  <p className="text-body-secondary small mb-0">
                    Dashboard profitabilitas otomatis yang mengelompokkan stok produk warung Anda ke dalam 4 kuadran dinamis (Star, Cash Cow, Question Mark, Dog) untuk strategi restock terbaik.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-white border-top py-4 text-center">
        <CContainer fluid="md">
          <p className="text-body-secondary small mb-0">
            &copy; 2026 <strong>UMKM Bersama Dashboard</strong>. Capstone Project Full-Stack & AI Integration. All Rights Reserved.
          </p>
        </CContainer>
      </footer>
    </div>
  )
}

export default LandingPage