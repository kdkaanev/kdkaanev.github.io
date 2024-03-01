from django.urls import path

from exam_app.car import views

urlpatterns = (
    path('catalogue/', views.catalogue_view, name='catalogue'),
    path('create/', views.CreateCarView.as_view(), name='create-car'),
    path('<int:pk>/', views.DetailCarView.as_view(), name='car-details'),
    path('<int:pk>/edit/', views.EditCarView.as_view(), name='edit-car'),
    path('<int:pk>/delete/', views.DeleteCarView.as_view(), name='delete-car'),
)