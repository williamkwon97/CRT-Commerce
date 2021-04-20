from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer, UserSerializer , UserSerializerwithToken
# Create your views here.


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

@api_view(['GET'])
def getRoutes(request):
    routes =[
        "/api/products/",
        "/api/products/create/", 
        "/api/products/upload/"
    ]
    return Response(routes)
@api_view(['GET'])
def getUserProfile(request):
    user = request.user
  
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        
        data = super().validate(attrs)

        serializer = UserSerializerwithToken(self.user).data 
        for k, v in serializer.items():    
            data[k] = v 
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)