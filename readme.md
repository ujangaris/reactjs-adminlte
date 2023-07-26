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
