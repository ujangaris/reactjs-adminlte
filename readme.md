# Stater Kit App

## Setup Template Admin LTE | User Page

    todo:
    1.  components/Wrapper.jsx
        - membuat wrapper admin lte
    2.  App.jsx
        - import dan panggil Navbar
        - import dan panggil Sidebar
        - import dan panggil ListUser
        - import dan panggil Footer
    3.  main.jsx
    4.  index.html
        - panggil plugin dan dist
    5.  components/Navbar.jsx
    6.  components/Sidebar.jsx
    7.  components/Footer.jsx
    8.  pages/user/ListUser.jsx
    9.  hidden file plugins
    10. pengujian pada browser:
        - npm run dev
        - http://127.0.0.1:5173
        - klik User
            http://127.0.0.1:5173/users

## Dashboard Page

    todo:

    1.  App.jsx
        - import dan pasang Dashboard
    2.  pages/dashboard/Index.jsx
        - Content Dashboard
    3.  components/Sidebar.jsx
        - Link to dashboard
    4.  pengujian pada browser:
        - npm run dev
        - klik Dashboard
            http://127.0.0.1:5173

## Role Page

    todo:

    1.  App.jsx
        - import dan pasang Role
    2.  pages/role/Index.jsx
        - Content Role
    3.  components/Sidebar.jsx
        - Link to role
    4.  pengujian pada browser:
        - npm run dev
        - klik Role
            http://127.0.0.1:5173

## Form Create User & Create Role

    todo:

    1.  App.jsx
        - import dan pasang CretaeUser
        - import dan pasang CretaeRole
    2.  pages/user/CreateUser.jsx
        - Form Create User
    3.  pages/user/index.jsx
        - Link to create user
    4.  pages/role/CreateRole.jsx
        - Form Create Role
    5.  pages/role/index.jsx
        - Link to create role
    6.  pengujian pada browser:
        - npm run dev
        - klik Role
            http://127.0.0.1:5173

## Form Create User Modification

    todo:

    1.  pages/user/CreateUser.jsx
        - pasang toggle switch active/block
            https://www.bootstraptoggle.com/
        - useEffect drag & drop image
        - preview image
        - input image
    2.  index.html
        - pasang cdn toggle bootstrap
        - pasang ajax toggle bootstrap
        - styling untuk image
    3.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173
        - klik User -> klik button add user

## Form Edit User

    todo:

    1.  pages/user/EditUser.jsx
        - copy paste dari CreateUser kemudian modifikasi
    2.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173
        - klik User -> klik button edit

## Form Edit Role

    todo:

    1.  pages/role/EditRole.jsx
        - copy paste dari CreateRole kemudian modifikasi
    2.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173
        - klik Role -> klik button edit

## Button Login, register, logout pada Navbar

    todo:

    1.  components/Navbar.jsx
        - tambahkan code button, dan image
    2.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173

## Menampilkan data users dan roles

    todo:

    1.  install axios
        - npm i axios
    2.  pages/users/index.jsx
        - import dan pasang useState, useEffect
        - fetching data users dengan axios
        - implementasi data users menggunakan map
    3.  pages/users/index.jsx
        - import dan pasang useState, useEffect
        - fetching data roles dengan axios
        - implementasi data roles menggunakan map
    4.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173
        - klik users menu
        - klik roles menu

## Create user

    todo:

    1.  pages/users/create.jsx
        - deklarasi hooks untuk create user
        - pasang handleSubmit
        - implement form submit
    2.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173
        - klik users menu
        - klik roles menu

## Register user

    todo:

    1.  install rect spinner
        - npm i react-spinners
    2.  pages/auth/Register.jsx
        - deklarasi hooks untuk register user
        - pasang handleSubmit
        - implement form submit
        - buat kondisi Jika respons dari server berhasil dan status "CREATED",
        - maka simpan ID pengguna ke local storage
    3.  pages/auth/Activated.jsx
        - import dan pasang Loading dari react-spinners
        - deklarasi hooks isLoading
        - import dan pasang useNavigate
        - pasang useEffect untuk aktivasi user
        - Remove id_user from localStorage
        - implement pasang Loading
    4.  main.js
        - import dana pasang pages/auth/Activated
    5.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173/register
        - jika berhasil akan di redirect ke halaman activated, lalu kehalaman login
          (tahap ini agar bisa menggunakan email sembarang, ketika featurnya sudah fix akan  ke email terlebih dahulu)

## modifikasi code activated & memasang notifikasi sweet alert2

    todo:

    1.  install sweetalert2 & animatecss
        - npm i sweetalert2 animate.css --save
    2.  pages/auth/Register.jsx
        - import dan pasang sweetalert2
    3.  pages/auth/Register.jsx
        - deklarasi hooks untuk email dan password
        - import dan pasang useNavigate
        - pasang handleSubmit
        - Menyimpan data user ke localStorage
        - implement handleSubmit
    4.  pages/auth/Activated.jsx
        - import dan pasang sweetalert2
        - Lakukan tugas yang sesuai dengan aktivasi user
        - Misalnya, menunggu beberapa detik sebagai contoh "aktivasi"
        - Tugas ini bisa diganti dengan tugas asinkron lainnya sesuai kebutuhan
        - dLakukan redirect ke halaman login setelah tampilan SweetAlert
    5.  main.js
        - import dana pasang pages/auth/Activated dengan path baru
    6.  pengujian pada browser:
        - npm run dev : http://127.0.0.1:5173/register
        - jika berhasil akan ada nitifikasi yang berisi informasi dari sweet alert
        - buka email yang terdaftar, akan ada kontak masuk dari aplikasi, klik link
        - akan di redirect kehalaman activated, tunggu beberapa saat lalu akan di redirect ke halaman login

## Login & modifikasi code register & roles

    todo:

    1.  pages/services/baseUrlApi.jsx
        - deklarasi dan export endpoint dari api
    2.  pages/services/authApi.jsx
        - import dan pasang baseUrlApi
        - fetchLogin
        - fetchRegister
    3.  pages/auth/Login.jsx
        - deklarasi hooks untuk email dan password
        - deklarasai isLogin untuk logic animation button
        - import dan pasang useNavigate
        - import fetchLogin
        - pasang handleSubmit
        - Panggil fungsi fetchLogin untuk melakukan permintaan login ke backend
        - Cek apakah login berhasil
        - import dan pasang sweetalert2
        - implementasi submit login
    4.  pages/auth/Register.jsx
        - modifikasi code
        - State untuk kondisi animasi tombol
        - import fetchRegister
        - Panggil fungsi fetchRegister untuk melakukan permintaan register ke backend
        - implement handleSubmit register
    5.  pages/services/rolesApi.jsx
        - import dan pasang baseUrlApi
        - fetchRolesData
    6.  pages/role/index.jsx
        - modifikasi code
        - pasang useNavigate
        - import fetchRoleApi
        - Ambil data roles dari server dengan fetchRoles
        - tampung nilai token kedalam variable token
        - pasang kondisi jika token tidak ada
        - Ambil data roles dengan menggunakan access_token
    7.  pengujian pada browser:
        - npm run dev :
            - http://127.0.0.1:5173/login
            - http://127.0.0.1:5173/register
        - jika berhasil akan ada nitifikasi yang berisi informasi dari sweet alert
        - http://127.0.0.1:5173/roles
            - data role akan tampil

## Create role

    todo:

    1.  pages/services/rolesApi.jsx
        - export fetchAddRoleData
    2.  pages/role/CreateRole.jsx
        - deklarasi hooks role
        - deklarasai isLogin untuk logic animation button
        - import dan pasang useNavigate
        - pasang handleSubmit
        - tampung nilai token kedalam variable token
        - buat kondisi jika token tidak ada
        - import fetchAddRoleData
        - Panggil fungsi fetchAddRoleData untuk melakukan permintaan login ke backend
        - import dan pasang sweetalert2
        - implementasi submit login
        - implement setLoading
    3.  pengujian pada browser:
        - npm run dev :
        - login sebagai super_user
        - http://127.0.0.1:5173/roles
            - klik button add role
            - kemuidian create satu data
            - jika berhasil akan ada nitifikasi success dan akan di redirect kehalaman all roles
