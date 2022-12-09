import React, { Component } from 'react'

export default class Mune extends Component {
  render() {
    return (
        <>

<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">

      <span className="brand-text font-weight-light">Test Acc</span>
    </a> 

    {/* Sidebar */}
    <div className="sidebar">
     
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/moh.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Mohammad </a>
        </div>
      </div>

  <button class="form-control form-control-sidebar mt-2 " type="button"> + جديد </button>



      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      
      
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                لوحة  التحكم 
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                  <p> انجازالامور</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p> نظرة عامة على الأعمال التجارية </p>
                </a>
              </li>
     
            </ul>
          </li>
         
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                الخدمات المصرفية 
                <i className="fas fa-angle-left right" />
              
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>الخدمات المصرفية </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/boxed.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>القواعد</p>
                </a>
              </li>
          
         
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                المبيعات 
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/charts/chartjs.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>جميع المبيعات</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/flot.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>العملاء</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/inline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>المنتجات والخدمات </p>
                </a>
              </li>
            </ul>
          </li>
     
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                العملاء والقادة
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/forms/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>العملاء</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/advanced.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>التسويق</p>
                </a>
              </li>
        
            </ul>
          </li>

          <li className="nav-item">
            <a href="pages/calendar.html" className="nav-link">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                السيولة النقدية 
             
              </p>
            </a>
          </li>



          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                المصروفات
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/tables/simple.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p> المصروفات</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/tables/data.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>الموردين</p>
                </a>
              </li>
       
            </ul>
          </li>
 

          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                الموظفون 
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              {/* <i class="fa-solid fa-receipt"></i> */}
              <p>
                التقارير 
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                الضرائب  
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-envelope" />
              <p>
                المحاسبة 
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>دليل الحسابات </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>التسوية </p>
                </a>
              </li>
        
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                التطبيقات
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/invoice.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>البحث عن التطبيقات</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/profile.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>تطبيقاتي</p>
                </a>
              </li>
      
            </ul>
          </li>
        
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>


        </>
     
    )
  }
}
