﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace LycokatConexion
{
    public partial class ABM : UserControl
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking2; Integrated Security = True");
        SqlDataAdapter adapter;
        public ABM(){InitializeComponent();}
        private void ABM_Load(object sender, EventArgs e){}
        private void button2_Click(object sender, EventArgs e)
        {
            adapter = conexion.Consulta("Select * from tipos_de_tarjeta");
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;
        }
        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e){}
        private void textBox1_TextChanged(object sender, EventArgs e){}
        private void button4_Click(object sender, EventArgs e)
        {
            textBox1.Text = String.Empty;
        }
        private void button3_Click(object sender, EventArgs e)
        {
            adapter = conexion.Consulta($"INSERT INTO tipos_de_tarjeta (nombre) VALUES ('{ textBox1.Text}')");
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;
        }
        private void pictureBox1_Click(object sender, EventArgs e){}
    }
}
