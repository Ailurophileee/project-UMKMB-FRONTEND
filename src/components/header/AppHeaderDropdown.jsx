import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilUser,
  cilLockLocked,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import API from '../../utils/api'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState('') 

  useEffect(() => {
    const fetchNamaPemilik = async () => {
      try {
        // Tembak endpoint summary warung yang baru kita modifikasi di BE
        const response = await API.get('/transactions/summary') 
        const nama = response.data.data.nama_pemilik
        
        setCurrentUser(nama)
      } catch (error) {
        console.error('Gagal mengambil nama pemilik warung:', error)
        setCurrentUser('Owner')
      }
    }

    fetchNamaPemilik()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login', { replace: true })
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-2 pe-0 text-body fw-semibold nav-link" caret={true}>
        <span className="text-body">{currentUser ? `Hi, ${currentUser}` : 'Memuat...'}</span>
      </CDropdownToggle>
      
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2 py-2 text-center">
          Akun Pemilik Warung
        </CDropdownHeader>
        
        <CDropdownItem href="/#/profil" onClick={(e) => e.preventDefault()}>
          <CIcon icon={cilUser} className="me-2" />
          Profil Warung (Milik {currentUser})
        </CDropdownItem>
        
        <CDropdownDivider />
        
        <CDropdownItem as="button" type="button" onClick={handleLogout} className="text-danger">
          <CIcon icon={cilLockLocked} className="me-2 text-danger" />
          Keluar Aplikasi
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown