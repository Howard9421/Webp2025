from django.urls import path 
from . import views

urlpatterns=[
    path('addcourse', views.addcourse_post, name='add_post'),
    path('courselist', views.courselist_post, name='list_post'),
]