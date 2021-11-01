import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { __assign } from 'tslib';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { EmpDetails } from './module';




const empdetails: EmpDetails[] = [
  { EmpId: 1, EmpName: "Johnny", EmpMobile: 9398369492, EmpGender: "Male", Empmail: "johnnyvanapalli74@gmail.com", EmpSalary: 25000 },
  { EmpId: 2, EmpName: "sai13", EmpMobile: 85066456522, EmpGender: "Male", Empmail: "sai123@gmail.com", EmpSalary: 35000 },
  { EmpId: 3, EmpName: "priya", EmpMobile: 85066548585, EmpGender: "Female", Empmail: "priyawarrarrior@gmail.com", EmpSalary: 45000 },
  { EmpId: 4, EmpName: "raj", EmpMobile: 85015174245, EmpGender: "Male", Empmail: "rajrajput123456@gmail.com", EmpSalary: 55000 },


];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['actions', 'emplid', 'name', 'mobile', 'gender', 'email', 'salary',];
  dataSource = new MatTableDataSource(empdetails);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  empdetail: EmpDetails;

  empdet: EmpDetails;
  empdetails: any;
  constructor() {
    this.empdetail = new EmpDetails;

    this.empdet = new EmpDetails;

  }




  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  addmember(form: NgForm) {
    empdetails.push({ EmpId: this.empdetail.EmpId, EmpName: this.empdetail.EmpName, EmpMobile: this.empdetail.EmpMobile, EmpGender: this.empdetail.EmpGender, Empmail: this.empdetail.Empmail, EmpSalary: this.empdetail.EmpSalary })
    this.dataSource = new MatTableDataSource<any>(empdetails);

    console.log(this.empdetail);
    alert("Member Added");
    form.resetForm();

  }

  delete(row: any) {
    console.log(row);
    if (confirm("Do you want to delete")) {


      this.dataSource.data.splice(this.dataSource.data.indexOf(row.id));
      this.dataSource = new MatTableDataSource<any>(empdetails);

      alert("Record Deleted");
      console.log("deleted");
    }
  }
  edit(row: any) {
    alert("DO you want to update the employee data?");
  }

}
