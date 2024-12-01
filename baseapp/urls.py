# urls.py

from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from . import views


urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),

    path("login/", LoginView.as_view(template_name="login.html"), name="login"),
    path('logout/', LogoutView.as_view(next_page='/login/'), name='logout'),

    path('info_today/', views.info_today, name='info_today'),     
    path('info/<str:work_date>/', views.info, name='info'),      
    path('info_dispatch/<str:work_date>/', views.info_dispatch, name='info_dispatch'),   

    path('config/work/<str:work_date>/', views.config_work, name='config_work'),
    path('config/work/staff/<int:staff_id>/<str:work_date>/', views.staff_date_work, name='staff_date_work'),
    path('config/work/update/staff/<int:staff_id>/<str:work_date>/', views.config_work_update_staff, name='config_work_update_staff'),
    path('config/work/customer/<int:customer_id>/<str:work_date>/', views.customer_date_work, name='customer_date_work'),
    path('config/work/update/customer/<int:customer_id>/<str:work_date>/', views.config_work_update_customer, name='config_work_update_customer'),

    path('config/staff/', views.staff, name='staff'),
    path('config/staff/dispatch/', views.config_staff_dispatch, name='config_staff_dispatch'),
    path('config/staff/create/', views.config_staff_create, name='config_staff_create'),
    path('config/staff/<int:staff_id>/update/', views.config_staff_update, name='config_staff_update'),
    path('config/staff/<int:staff_id>/save/', views.config_staff_save, name='config_staff_save'),    
    path('config/staff/<int:staff_id>/delete/', views.config_staff_delete, name='config_staff_delete'),

    path('config/customer/', views.customer, name='customer'),
    path('config/customer/dispatch/', views.config_customer_dispatch, name='config_customer_dispatch'),
    path('config/customer/create/', views.config_customer_create, name='config_customer_create'),
    path('config/customer/<int:customer_id>/update/', views.config_customer_update, name='config_customer_update'),
    path('config/customer/<int:customer_id>/save/', views.config_customer_save, name='config_customer_save'),    
    path('config/customer/<int:customer_id>/delete/', views.config_customer_delete, name='config_customer_delete'),
]